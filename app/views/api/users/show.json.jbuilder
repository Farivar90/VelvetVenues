json.extract! @user, :id, :username, :email, :full_name, :created_at, :updated_at
json.photo do
  json.image_url url_for(@user.photo) if @user.photo.attached?
end
