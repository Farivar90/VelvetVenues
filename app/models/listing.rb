class Listing < ApplicationRecord
    has_many :listings_amenities,
        dependent: :destroy

    belongs_to :user

    has_many :amenities,
        through: :listings_amenities,
        source: :amenity

    has_many_attached :photos
    
    validates :user_id, :price, :lot_size, :living_area, :location, :bedrooms, :full_baths, :built, :contact_info, presence: true
end
