# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# db/seeds.rb

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')

demo_user = User.create!(
  email: 'demo@example.com',
  username: 'demo_user',
  full_name: 'Demo User',
  password: 'Password!123',
)

puts "Demo user created with email: #{demo_user.email}"


Amenity.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('amenities')

amenities = [
  "Swimming Pool",
  "Home Theater",
  "Spa and Wellness Area",
  "Wine Cellar",
  "Home Automation System",
  "Outdoor Entertainment Area",
  "Private Gym",
  "Private Spa",
  "Elevator",
  "Landscaped Gardens",
  "Guest House",
  "Home Office",
  "Chef's Kitchen",
  "Outdoor Pool House",
  "Tennis Court",
  "Art Gallery or Display Space",
  "Greenhouse",
  "Library",
  "Smart Security System",
  "Waterfront Access"
]

amenities.each do |amenity_name|
  Amenity.create!(amenity: amenity_name)
end

puts "Amenities seeded successfully!"




