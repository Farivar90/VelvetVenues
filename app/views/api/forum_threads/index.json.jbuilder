json.array! @threads do |thread|
    json.id thread.id
    json.title thread.title
    json.user_id thread.user_id
    json.forum_category_id thread.forum_category_id
    json.created_at thread.created_at
    json.updated_at thread.updated_at
  end
  