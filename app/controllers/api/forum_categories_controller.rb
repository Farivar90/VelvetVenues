class Api::ForumCategoriesController < ApplicationController
    def index
      @categories = ForumCategory.all
      render json: @categories
    end
    
    def create
      @category = ForumCategory.new(category_params)
      if @category.save
        render json: @category, status: :created
      else
        render json: @category.errors, status: :unprocessable_entity
      end
    end

    def show
      @category = ForumCategory.find(params[:id])
      render json: @category
    end

    def update
      @category = ForumCategory.find(params[:id])
      if @category.update(category_params)
        render json: @category
      else
        render json: @category.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @category = ForumCategory.find(params[:id])
      @category.destroy
      render json: { message: 'success' }
    end

    private
    
    def category_params
      params.require(:forum_category).permit(:name, :description)
    end
  end
  