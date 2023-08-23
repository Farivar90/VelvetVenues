class Api::AmenitiesController < ApplicationController

    def index
        @amenities = Amenity.all
        render :index
    end
end