@threads.each do |thread|
  json.set! thread.id do
    json.extract! thread, :id, :title, :user_id, :forum_category_id, :created_at, :updated_at
  end
end
