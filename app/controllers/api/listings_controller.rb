class Api::ListingsController < ApplicationController

    before_action :find_listing, only: [:show, :edit, :update, :destroy]

    def index
        @listings = Listing.with_attached_photos.all
        if params[:search]
            @listings = Listing.where("location ILIKE ?", "%#{params[:search]}%")
        end
        if params[:min_price]
            @listings = @listings.where("price >= ?", params[:min_price])
        end
        if params[:max_price]
            @listings = @listings.where("price <= ?", params[:max_price])
        end
        if params[:min_bedrooms]
            @listings = @listings.where("bedrooms >= ?", params[:min_bedrooms])
        end
        if params[:max_bedrooms]
            @listings = @listings.where("bedrooms <= ?", params[:max_bedrooms])
        end
        if params[:min_baths]
            @listings = @listings.where("full_baths >= ?", params[:min_baths])
        end
        if params[:max_baths]
            @listings = @listings.where("full_baths <= ?", params[:max_baths])
        end
        if params[:min_garage]
            @listings = @listings.where("garage >= ?", params[:min_garage])
        end
        if params[:max_garage]
            @listings = @listings.where("garage <= ?", params[:max_garage])
        end
        if params[:min_lot_size]
            @listings = @listings.where("lot_size >= ?", params[:min_lot_size])
        end
        if params[:max_lot_size]
            @listings = @listings.where("lot_size <= ?", params[:max_lot_size])
        end
        if params[:min_living_area]
            @listings = @listings.where("living_area >= ?", params[:min_living_area])
        end
        if params[:max_living_area]
            @listings = @listings.where("living_area <= ?", params[:max_living_area])
        end
        if params[:min_built]
            @listings = @listings.where("built >= ?", params[:min_built])
        end
        if params[:max_built]
            @listings = @listings.where("built <= ?", params[:max_built])
        end
        if params[:amenities]
            amenity_ids = params[:amenities].split(',')
            @listings = @listings.joins(:amenities).where('amenities.id IN (?)', amenity_ids)
        end        
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end

    def create
        @listing = Listing.new(listing_params)
        @listing.photos.attach(params[:listing][:photos])
        amenities = params[:amenities]
        amenities.split(',').each do |amenity|
            @listing.amenities << Amenity.where(id: amenity)
        end
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
        @listing.photos.attach(params[:listing][:photos])
        @listing.listings_amenities.destroy_all
        amenities = params[:amenities]
        amenities.split(',').each do |amenity|
            @listing.amenities << Amenity.where(id: amenity)
        end
        if @listing.update(listing_params)
            render :show
        else
            render json: {errors: @listing.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @listing = Listing.find(params[:id])
        if @listing.destroy
            render json: { message: "Listing deleted" }
        else
            render json: { error: "Error deleting listing" }, status: :unprocessable_entity
        end
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