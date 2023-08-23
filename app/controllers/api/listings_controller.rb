class Api::ListingsController < ApplicationController

    before_action :find_listing, only: [:show, :edit, :update, :destroy]

    def index
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end

    def create
        @listing = Listing.new(listing_params)
        @listing.photos.attach(params[:listing][:photos])
        amenities = params[:listing][:amenities]
        @listing.amenities << Amenity.where(amenity: amenities) if amenities
        debugger
        if @listing.save!
            render :show
        else
            render json: {errors: @listing.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def edit
        @listing = Listing.find(params[:id])
    end

    def update
        @listing = Listing.find(params[:id])
        if @listing.update(listing_params)
            render :show
        else
            render json: {errors: @listing.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @listing = Listing.find(params[:id])
        @listing.destroy
        render json: {message: "Listing deleted"}
    end

    private

    def find_listing
        @listing = Listing.find_by(id: params[:id])
        unless @listing
            render json: {error: "Listing not found"}, status: :not_found
        end
    end

    def listing_params
        params.require(:listing).permit(:user_id, :price, :lot_size,:living_area, :location, :longitude, :latitude, :bedrooms, :full_baths, :half_baths, :garage, :built, :description, :contact_info, photos: [])
    end
end