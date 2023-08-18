json.array! @listings do |listing|
    json.extract! listing, :id, :user_id, :price, :lot_size, :living_area, :location, :longitude, :latitude, :bedrooms, :full_baths, :half_baths, :garage, :built, :description, :contact_info
    # json.url listing_url(listing, format: :json)
  end
  