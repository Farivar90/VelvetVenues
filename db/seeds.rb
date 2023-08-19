# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# db/seeds.rb

ListingsAmenity.destroy_all
Amenity.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('amenities')
Listing.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('listings')
User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')

demo_user = User.create!(
  email: 'demo@example.com',
  username: 'demo_user',
  full_name: 'Demo User',
  password: 'Password!123',
)
  
puts "Demo user created with email: #{demo_user.email}"
  
# Seed Users
realtor1 =  User.create!(
  email: "realtor1@example.com",
  username: "realtor1",
  full_name: "John Doe",
  password: "Password!123",
)
  
realtor2 = User.create!(
  email: "realtor2@example.com",
  username: "realtor2",
  full_name: "Jane Smith",
  password: "Password!123",
)
  
realtor3 = User.create!(
  email: "realtor3@example.com",
  username: "realtor3",
  full_name: "Michael Johnson",
  password: "Password!123",
)
  
realtor4 = User.create!(
  email: "realtor4@example.com",
  username: "realtor4",
  full_name: "Emily Brown",
  password: "Password!123",
)

realtor5 = User.create!(
  email: "realtor5@example.com",
  username: "realtor5",
  full_name: "William Wilson",
  password: "Password!123",
)

user6 = User.create!(
  email: "user6@example.com",
  username: "user6",
  full_name: "Grace Thompson",
  password: "Password!123",
)

user7 = User.create!(
  email: "user7@example.com",
  username: "user7",
  full_name: "Lucas Rodriguez",
  password: "Password!123",
)

user8 = User.create!(
  email: "user8@example.com",
  username: "user8",
  full_name: "Emily Harris",
  password: "Password!123",
)

user9 = User.create!(
  email: "user9@example.com",
  username: "user9",
  full_name: "Mia King",
  password: "Password!123",
)

user10 = User.create!(
  email: "user10@example.com",
  username: "user10",
  full_name: "Noah Martinez",
  password: "Password!123",
)

user11 = User.create!(
  email: "user11@example.com",
  username: "user11",
  full_name: "Aiden Turner",
  password: "Password!123",
)

user12 = User.create!(
  email: "user12@example.com",
  username: "user12",
  full_name: "Isabella Carter",
  password: "Password!123",
)

user13 = User.create!(
  email: "user13@example.com",
  username: "user13",
  full_name: "Ethan White",
  password: "Password!123",
)

user14 = User.create!(
  email: "user14@example.com",
  username: "user14",
  full_name: "Sophia Allen",
  password: "Password!123",
)

user15 = User.create!(
  email: "user15@example.com",
  username: "user15",
  full_name: "Liam Hall",
  password: "Password!123",
)

puts "Users created"




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



# Seed Listings
20.times do |i|
  Listing.create!(
    user_id: rand(1..5),
    price: rand(20000000..100000000),
    lot_size: rand(1..50),
    living_area: rand(5000..15000),
    location: "Luxury Street #{i + 1}",
    longitude: rand(-180.0..180.0),
    latitude: rand(-90.0..90.0),
    bedrooms: rand(5..10),
    full_baths: rand(3..8),
    half_baths: rand(0..3),
    garage: rand(1..10),
    built: rand(1960..2023),
    description: "Stunning luxury property with breathtaking views.",
    contact_info: "Contact: 123"
  )
end

puts "Listings seeded successfully!"

# Seed ListingsAmenities
400.times do |i|
  ListingsAmenity.create!(
    listing_id: rand(1..20),
    amenity_id: rand(1..20)
  )
end

puts "ListingsAmenities seeded successfully!"