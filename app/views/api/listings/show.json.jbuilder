json.extract! @listing, :id, :user_id, :price, :lot_size, :living_area, :location, :longitude, :latitude, :bedrooms, :full_baths, :half_baths, :garage, :built, :description, :contact_info

json.amenities @listing.amenities do |amenity|
  json.extract! amenity, :id, :amenity
end

if @listing.photos.attached?
  json.photos @listing.photos do |photo|
    json.image_url url_for(photo)
  end
end