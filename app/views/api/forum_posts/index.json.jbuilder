@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :content
    json.user post.user.username
    json.created_at post.created_at
    json.updated_at post.updated_at
    json.user_id post.user_id
  end
end
