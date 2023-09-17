@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :content
    json.user post.user.username
    json.created_at post.created_at
    json.updated_at post.updated_at
    json.user_id post.user_id
    json.votes do
      json.total post.votes.sum(:value)
      json.upvotes post.votes.where(value: 1).count
      json.downvotes post.votes.where(value: -1).count
    end
  end
end
