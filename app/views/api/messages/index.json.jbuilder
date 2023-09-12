@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :sender_id, :receiver_id, :content, :created_at, :updated_at
  end
end
  