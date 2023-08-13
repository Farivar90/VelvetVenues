class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + ['password']

  before_action :require_logged_out, only: [:create, :new]

  before_action :require_logged_in, except: [:create]
  
  before_action :set_user, only: [:show, :update, :destroy]


  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:username, :email, :password, :full_name)
    end
end
