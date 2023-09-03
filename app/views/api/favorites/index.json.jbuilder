@favorites.each do |favorite|
  json.set! favorite.id do
    json.extract! favorite, :id, :listing_id
  end
end