@amenities.each do |amenity|
    json.set! amenity.id do
      json.extract! amenity, :id, :amenity
    end
end