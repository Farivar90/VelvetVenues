json.array! @users do |user|
    json.extract! user, :id, :username, :email, :full_name, :created_at, :updated_at
    json.photo do
      json.image_url url_for(user.photo) if user.photo.attached?
    end
  end
  
  @users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username, :email, :full_name, :created_at, :updated_at
        if user.photo.attached?
          json.image_url url_for(photo)
        end
    end
end
