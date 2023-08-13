class ApplicationController < ActionController::API
    before_action :snake_case_params, :attach_authenticity_token

    include ActionController::RequestForgeryProtection
  
    protect_from_forgery with: :exception

    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActionController::ParameterMissing, with: :parameter_missing
    rescue_from StandardError, with: :internal_server_error

    helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    unless current_user
      render json: { message: 'Unauthorized' }, status: :unauthorized 
    end
  end

  def require_logged_out
    if logged_in?
        render json: {errors: ['Must be logged out']}, status: unauthorized 
    end 
  end 

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token! if current_user
    session[:session_token] = nil
    @current_user = nil
  end
      
    private

    def snake_case_params
     params.deep_transform_keys!(&:underscore)
    end

    def record_not_found(exception)
        render json: { error: "Record not found: #{exception.message}" }, status: :not_found
    end
    
    def parameter_missing(exception)
        render json: { error: "Parameter missing: #{exception.message}" }, status: :unprocessable_entity
    end
    
    def internal_server_error(exception)
        render json: { error: "Internal server error: #{exception.message}" }, status: :internal_server_error
    end

    def invalid(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def attach_authenticity_token
        headers['X-CSRF-Token'] = masked_authenticity_token(session)
    end
    
end
