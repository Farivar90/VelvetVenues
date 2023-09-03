class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + ['password']
  before_action :require_logged_out, only: [:create, :new]
  before_action :require_logged_in, except: [:create, :index]
  before_action :set_user, only: [:show, :update, :destroy]


  def index
    @users = User.all
    if params[:search]
      @users = User.where("username ILIKE ?", "%#{params[:search]}%")
    end
    if params[:full_name]
      @users = User.where("full_name ILIKE ?", "%#{params[:full_name]}%")
    end
    render :index
  end

  def show
    render :show
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render json: {message: "User deleted"}
  end

  private
  
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:username, :email, :password, :full_name, :created_at, :updated_at)
    end
end
