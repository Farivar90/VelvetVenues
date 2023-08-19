@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :user_id, :price, :lot_size, :living_area, :location, :longitude, :latitude, :bedrooms, :full_baths, :half_baths, :garage, :built, :description, :contact_info
    end
end