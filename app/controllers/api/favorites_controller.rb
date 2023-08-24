class Api::FavoritesController < ApplicationController
    
    def index
      @user_favorites = current_user.favorites
      render :index
    end

    def create
    #   @favorite = current_user.favorites.build(listing: listing)
      @favorite = Favorite.new(user_id: current_user.id, listing_id:params[:listing_id] )
  
      if @favorite.save
        render json: { status: 'success', message: 'Listing added to favorites' }
      else
        render json: { status: 'error', message: @favorite.errors.full_messages.join(', ') }
      end
    end
  
    def destroy
      @favorite = current_user.favorites.find_by(listing_id: params[:listing_id])
      if @favorite
        @favorite.destroy
        render json: { status: 'success', message: 'Listing removed from favorites' }
      else
        render json: { status: 'error', message: 'Listing not found in favorites' }
      end
    end
  
  end
  