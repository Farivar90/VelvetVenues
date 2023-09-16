class Api::ForumPostsController < ApplicationController
    before_action :set_forum_thread
    before_action :set_forum_post, only: [:show, :update, :destroy]
  
    def index
      @posts = @forum_thread.forum_posts
      render :index
    end
  
    def create
      @post = @forum_thread.forum_posts.build(post_params)
      @post.user = current_user
      if @post.save
        render json: @post, status: :created
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    def show
      render json: @post.as_json(include: :votes)
    end
    
  
    def update
      if @post.update(post_params)
        render json: @post
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @post.destroy
      render json: { message: 'success' }
    end
  
    private
  
    def set_forum_thread
      @forum_thread = ForumThread.find(params[:forum_thread_id])
    end
    
    def set_forum_post
      @post = ForumPost.find(params[:id])
    end
    
    def post_params
      params.require(:forum_post).permit(:content)
    end
  end
  