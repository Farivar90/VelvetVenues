class Api::ForumThreadsController < ApplicationController
    before_action :set_forum_category
    before_action :set_forum_thread, only: [:show, :update, :destroy]
  
    def index
      @threads = @forum_category.forum_threads.includes(:user)
      response_data = {}
    
      @threads.each do |thread|
        response_data[thread.id] = thread.as_json.merge({
          "username" => thread.user.username
        })
      end
    
      render json: response_data
    end
    
    
    def create
      @thread = @forum_category.forum_threads.build(thread_params)
      @thread.user = current_user
      if @thread.save
        render json: @thread, status: :created
      else
        render json: @thread.errors, status: :unprocessable_entity
      end
    end
  
    def show
      render json: @thread
    end
  
    def update
      if @thread.update(thread_params)
        render json: @thread
      else
        render json: @thread.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @thread.destroy
      render json: { message: 'success' }
    end
  
    private
  
    def set_forum_category
      @forum_category = ForumCategory.find(params[:forum_category_id])
    end
    
    def set_forum_thread
      @thread = ForumThread.find(params[:id])
    end
    
    def thread_params
      params.require(:forum_thread).permit(:title)
    end
  end
  