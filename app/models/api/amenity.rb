class Api::Amenity < ApplicationRecord
    validates :amenity, presence: true
end
