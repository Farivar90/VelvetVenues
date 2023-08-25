
json.array! @favorites.includes(:listing) do |favorite|
  json.id favorite.id
  json.listing do
    json.id favorite.listing.id
    json.title favorite.listing.title
    json.description favorite.listing.description
  end
  json.user_id favorite.user_id
end
