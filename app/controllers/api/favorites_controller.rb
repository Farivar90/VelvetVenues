
class Api::FavoritesController < ApplicationController

  def index
    @favorites = current_user.favorites
    render :index unless @favorites.empty?
    render json: { status: 'error', message: 'No favorites found' } if @favorites.empty?
  end

  def show
    @favorite = current_user.favorites.find_by(listing_id: params[:listing_id])
    render json: {favorite: @favorite } unless @favorite.nil?
    render json: { status: 'error', message: 'Favorite not found' } if @favorite.nil?
  end

  def create
    @favorite = Favorite.new(user_id: current_user.id, listing_id: params[:listing_id])

    if @favorite.save
      render json: {message: 'Listing added to favorites' }
    else
      render json: { message: @favorite.errors.full_messages.join(', ') }
    end
  end

  def destroy
    @favorite = current_user.favorites.find_by(listing_id: params[:id])

    if @favorite
      @favorite.destroy
      render json: { status: 'success', message: 'Listing removed from favorites' }
    else
      render json: { status: 'error', message: 'Listing not found in favorites' },  status: :not_found
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:listing_id)
  end

end
