class ListingsAmenity < ApplicationRecord
    belongs_to :listing
    belongs_to :amenity
end
