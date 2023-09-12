@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :sender_id, :receiver_id, :content, :created_at, :updated_at
    json.sender_name message.sender.full_name.presence || message.sender.username
    json.receiver_name message.receiver.full_name.presence || message.receiver.username
  end
end
