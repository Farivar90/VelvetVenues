json.array! @posts do |post|
    json.id post.id
    json.content post.content
    json.user post.user.username # Or other fields as required
    # ... other required fields
  end
  