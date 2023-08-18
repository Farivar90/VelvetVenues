class Api::ListingsController < ApplicationController
    def index
        @listings = Listing.all
        render 'index.json.jbuilder', locals: { listings: @listings }
    end

    def show
        @listing = Listing.find(params[:id])
        render 'show.json.jbuilder',locals: { listing: @listing }
    end

    def create
        @listing = Listing.new(listing_params)
        if @listing.save
            render 'show.json.jbuilder', locals: { listing: @listing }
        else
            render json: {errors: @listing.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        @listing = Listing.find(params[:id])
        if @listing.update(listing_params)
            render 'show.json.jbuilder', locals: { listing: @listing }
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

    def listing_params
        params.require(:listing).permit(:user_id, :price, :lot_size, :living_area, :location, :longitude, :latitude, :bedrooms, :full_baths, :half_baths, :garage, :built, :description, :contact_info)
    end