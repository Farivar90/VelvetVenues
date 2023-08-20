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
  full_name: 'Shamim Amiri',
  password: 'Password!123',
)
  
puts "Demo user created with email: #{demo_user.email}"
  
# Seed Users
realtor1 =  User.create!(
  email: "realtor1@example.com",
  username: "realtor1",
  full_name: "John Doe",
  password: "Password!223",
)
  
realtor2 = User.create!(
  email: "realtor2@example.com",
  username: "realtor2",
  full_name: "Jane Smith",
  password: "Password!323",
)
  
realtor3 = User.create!(
  email: "realtor3@example.com",
  username: "realtor3",
  full_name: "Michael Johanson",
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
  email: "grace@example.com",
  username: "gracy32",
  full_name: "Grace Thompson",
  password: "Password!123",
)

user7 = User.create!(
  email: "mrlucky@example.com",
  username: "lucky",
  full_name: "Lucas Rodriguez",
  password: "Password!123",
)

user8 = User.create!(
  email: "harris90@example.com",
  username: "emy1990",
  full_name: "Emily Harris",
  password: "Password!123",
)

user9 = User.create!(
  email: "miakh@example.com",
  username: "khaj",
  full_name: "Mia Khaj",
  password: "Password!123",
)

user10 = User.create!(
  email: "noahmartinez@example.com",
  username: "mr-prophet",
  full_name: "Noah Martinez",
  password: "Password!123",
)

user11 = User.create!(
  email: "piere@example.com",
  username: "mromidyar",
  full_name: "Pierre Morad Omidyar",
  password: "Password!123",
)

user12 = User.create!(
  email: "bella@example.com",
  username: "bella",
  full_name: "Isabella Carter",
  password: "Password!123",
)

user13 = User.create!(
  email: "snowwhite@example.com",
  username: "eth",
  full_name: "Ethan White",
  password: "Password!123",
)

user14 = User.create!(
  email: "sophi@example.com",
  username: "allen87",
  full_name: "Sophia Allen",
  password: "Password!123",
)

user15 = User.create!(
  email: "msram@example.com",
  username: "ramdokht",
  full_name: "Ramdokht Hakhamaneshi",
  password: "Password!123",
)

user16 = User.create!(
  email: "azalia@example.com",
  username: "azalia",
  full_name: "Azalia Hakhamaneshi",
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
list1 = Listing.create!(
  user_id: 1,
  price: 44495000,
  lot_size: 11.0,
  living_area: 12000,
  location: "Harbour Island, Harbour Island, Bahamas",
  longitude: rand(-180.0..180.0),
  latitude: rand(-90.0..90.0),
  bedrooms: 20,
  full_baths: 15,
  half_baths: 5,
  garage: 0,
  built: 1910,
  description: "Step into your own personal oasis at Crown Pigeon Island, a breathtaking 11-acre paradise in the idyllic North Eleuthera. This private island boasts three stunning beaches, each offering its own unique beauty, surrounded by crystal-clear waters and pristine white sand flats.

  Take a stroll through lush tropical foliage, discovering the island's many hidden gems, including a beach club, bar, and BBQ facility. Whether you're a water sports enthusiast or simply love to relax on the beach, this island has everything you need to enjoy a serene escape unlike any other.
  Crown Pigeon Island is also a haven for fishermen and angling enthusiasts, with the famed Bonefish flats just a stone's throw away. And when you're ready to experience some local culture and cuisine, a short boat ride to historic Dunmore Town on Harbour Island is all it takes.
  This private island is not just about its natural beauty. It also features over 12,000 square feet of beautifully constructed homes, cottages, and villas, each offering breathtaking views of the harbor. The three residences provide a total of 15 sleeping rooms, patios, deck spaces, gardens, and outdoor kitchens, making it an ideal destination for family gatherings, corporate retreats, or simply a luxurious vacation with friends.
  Crown Pigeon Island is fully equipped with everything you need to enjoy island living at its best, including high-speed internet, a water-maker system, an organic composter, and backup generators. A 4-acre harbor on the leeward side, designated as a sea turtle sanctuary, provides ample space for your watercraft, including 2 boat lifts, a hauling ramp, and a floating dock.
  This private island offers the ultimate in privacy, luxury, and natural beauty. Come experience the pure bliss of island living at Crown Pigeon Island.",
  contact_info: "Contact: Shamim Amiri"
)

list2 = Listing.create!(
  user_id: 2,
  price: 49000000,
  lot_size: 2.03,
  living_area: 11275,
  location: "Aspen, CO, United States",
  longitude: rand(-180.0..180.0),
  latitude: rand(-90.0..90.0),
  bedrooms: 9,
  full_baths: 6,
  half_baths: 3,
  garage: 6,
  built: 2002,
  description: "Unmatched style, quality and amenities on over two private acres in West Buttermilk, with sweeping views of the Elk Mountain Range. The sophisticated design is balanced with substantial materials of stone and wood, resulting in the ultimate luxury mountain estate. Upon entering the home, an impressive stone colonnade wraps the main level, filled with natural light, which flows openly into the great room, flanked by floor to ceiling glass that opens to an expansive pool terrace. A cozy family room off the kitchen extends to the outdoor lounge with a fireplace and grill. The elegant dining and living room can be partitioned off for special events, with a chef's kitchen perfect for hosting intimate parties or large gatherings. Designed for single level living, the primary suite is a true retreat, with a grand bathroom, oversized closets and easy access to the library, office, spa and gym. Each of the six en-suite bedrooms offer a serene setting for family and guests, with generous layouts and spa-like baths. A lofted study and library are an inspirational place to work or relax as you look out upon the living rooms as well as the beautiful mountain scenery. Downstairs, the entertainment level has a spacious family room, fully equipped fitness area and a state of the art theater with a Dolby CPA 50 certified sound system, Barco projector and first run film screening capability. There is also a wine cave with dry stacked stone walls, barrel vaulted ceilings, two separate cellars for red or white wine and a private tasting room. The landscape is reminiscent of the European countryside, with rolling hills where elk can often be found grazing in the distance, showcasing sublime mountain scenery. Meticulously cared for by a team of specialists, this rare property, less than four miles from downtown Aspen, is a once in a generation masterpiece.",
  contact_info: "Contact: John Doe"
)

list3 = Listing.create!(
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

list4 = Listing.create!(
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

list5 = Listing.create!(
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

list6 = Listing.create!(
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

list7 = Listing.create!(
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

list8 = Listing.create!(
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

list9 = Listing.create!(
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

list10 = Listing.create!(
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

list11 = Listing.create!(
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

list12 = Listing.create!(
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

list13 = Listing.create!(
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

list14 = Listing.create!(
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

list15 = Listing.create!(
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

list16 = Listing.create!(
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

list17 = Listing.create!(
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

list18 = Listing.create!(
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

list19 = Listing.create!(
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

list20 = Listing.create!(
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

list21 = Listing.create!(
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

list22 = Listing.create!(
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



puts "Listings seeded successfully!"

# Seed ListingsAmenities
400.times do |i|
  ListingsAmenity.create!(
    listing_id: rand(1..20),
    amenity_id: rand(1..20)
  )
end

puts "ListingsAmenities seeded successfully!"