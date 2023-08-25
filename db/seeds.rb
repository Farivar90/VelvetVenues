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
Favorite.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('favorites')

demo_user = User.create!(
  email: 'demo@example.com',
  username: 'demo_user',
  full_name: 'Shamim Amiri',
  password: 'Password!123',
)

demo_user.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/1-shamim-amiri.jpg'),
  filename: '1-shamim-amiri.jpg',
)
  
puts "Demo user created with email: #{demo_user.email}"
  
# Seed Users
user1 =  User.create!(
  email: "john1@example.com",
  username: "rockit",
  full_name: "John Doe",
  password: "Password!223",
)

user1.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/2-john-doe.webp'),
  filename: '2-john-doe.jpg'
)
  
realtor2 = User.create!(
  email: "realtor2@example.com",
  username: "realtor2",
  full_name: "Jane Smith",
  password: "Password!323",
)

realtor2.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/3-jane-smith.jpg'),
  filename: '3-jane-smith.jpg'
)
  
realtor3 = User.create!(
  email: "realtor3@example.com",
  username: "realtor3",
  full_name: "Michael Johanson",
  password: "Password!123",
)

realtor3.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/4-Michael+Johanson.jpg'),
  filename: '4-michael-johanson.jpg'
)
  
realtor4 = User.create!(
  email: "realtor4@example.com",
  username: "realtor4",
  full_name: "Emily Brown",
  password: "Password!123",
)

realtor4.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/5-Emily+Brown.jpg'),
  filename: '5-emily-brown.jpg'
)

realtor5 = User.create!(
  email: "realtor5@example.com",
  username: "realtor5",
  full_name: "William Wilson",
  password: "Password!123",
)

realtor5.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/6-William+Wilson.jpg'),
  filename: '6-william-wilson.jpg'
)

user6 = User.create!(
  email: "grace@example.com",
  username: "gracy32",
  full_name: "Grace Thompson",
  password: "Password!123",
)

user6.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/7-Grace+Thompson.jpg'),
  filename: '7-grace-thompson.jpg'
)

user7 = User.create!(
  email: "mrlucky@example.com",
  username: "lucky",
  full_name: "Lucas Rodriguez",
  password: "Password!123",
)

user7.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/8-Lucas+Rodriguez.jpg'),
  filename: '8-lucas-rodriguez.jpg'
)

user8 = User.create!(
  email: "harris90@example.com",
  username: "emy1990",
  full_name: "Emily Harris",
  password: "Password!123",
)

user8.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/9-Emily+Harris.jpg'),
  filename: '9-emily-harris.jpg'
)

user9 = User.create!(
  email: "miakh@example.com",
  username: "khaj",
  full_name: "Mia Khaj",
  password: "Password!123",
)

user9.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/10-Mia+Khaj.jpg'),
  filename: '10-mia-khaj.jpg'
)

user10 = User.create!(
  email: "noahmartinez@example.com",
  username: "mr-prophet",
  full_name: "Noah Martinez",
  password: "Password!123",
)

user10.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/11-Noah+Martinez.jpg'),
  filename: '11-noah-martinez.jpg'
)

user11 = User.create!(
  email: "piere@example.com",
  username: "mromidyar",
  full_name: "Pierre Morad Omidyar",
  password: "Password!123",
)

user11.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/12-Pierre_Omidyar.jpg'),
  filename: '12-pierre-morad-omidyar.jpg'
)

user12 = User.create!(
  email: "bella@example.com",
  username: "bella",
  full_name: "Isabella Carter",
  password: "Password!123",
)

user12.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/13-Isabella+Carter.jpg'),
  filename: '13-isabella-carter.jpg'
)

user13 = User.create!(
  email: "snowwhite@example.com",
  username: "eth",
  full_name: "Ethan White",
  password: "Password!123",
)

user13.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/14-Ethan+White.jpg'),
  filename: '14-ethan-white.jpg'
)

user14 = User.create!(
  email: "sophi@example.com",
  username: "allen87",
  full_name: "Sophia Allen",
  password: "Password!123",
)

user14.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/15-Sophia+Allen.jpg'),
  filename: '15-sophia-allen.jpg'
)

user15 = User.create!(
  email: "msram@example.com",
  username: "ramdokht",
  full_name: "Ramdokht Hakhamaneshi",
  password: "Password!123",
)

user15.photo.attach(
  io: URI.open("https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/16-Ramdokht+Hakhamaneshi.jpg"),
  filename: '16-ramdokht-hakhamaneshi.jpg'
)

user16 = User.create!(
  email: "artemis@example.com",
  full_name: "Artemis Hakhamaneshi",
  username: "artemis",
  password: "Password!123",
)

user16.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/17-Azalia+Hakhamaneshi.jpg'),
  filename: '17-artemis-hakhamaneshi.jpg'
)

user17 = User.create!(
  email: "sanazghafari@example.com",
  username: "sanny",
  full_name: "Sanaz Ghafari",
  password: "Password!123",
)

user17.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/18-Sanaz+Ghafari.jpg'),
  filename: '18-sanaz-ghafari.jpg'
)

user18 = User.create!(
  email: "liu@example.com",
  username: "crystalll",
  full_name: "Crystal Liu",
  password: "Password!123",
)

user18.photo.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/seeds/19-Crystal+Liu.jpg'),
  filename: '19-crystal-liu.jpg'
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
  longitude: -76.63585619999998,
  latitude: 25.5282318,
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

list1.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/1/1-1.png'),
  filename: '1-1.png'
)

list1.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/1/1-2.png'),
  filename: '1-2.png'
)

list1.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/1/1-3.png'),
  filename: '1-3.png'
)

list1.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/1/1-4.png'),
  filename: '1-4.png'
)

list1.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/1/1-5.png'),
  filename: '1-5.png'
)

list1.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/1/1-6.png'),
  filename: '1-6.png'
)

list1.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/1/1-7.png'),
  filename: '1-7.png'
)

list2 = Listing.create!(
  user_id: 2,
  price: 49000000,
  lot_size: 2.03,
  living_area: 11275,
  location: "Aspen, CO, United States",
  longitude: -106.817535,
  latitude: 39.191097,
  bedrooms: 9,
  full_baths: 6,
  half_baths: 3,
  garage: 6,
  built: 2002,
  description: "Unmatched style, quality and amenities on over two private acres in West Buttermilk, with sweeping views of the Elk Mountain Range. The sophisticated design is balanced with substantial materials of stone and wood, resulting in the ultimate luxury mountain estate. Upon entering the home, an impressive stone colonnade wraps the main level, filled with natural light, which flows openly into the great room, flanked by floor to ceiling glass that opens to an expansive pool terrace. A cozy family room off the kitchen extends to the outdoor lounge with a fireplace and grill. The elegant dining and living room can be partitioned off for special events, with a chef's kitchen perfect for hosting intimate parties or large gatherings. Designed for single level living, the primary suite is a true retreat, with a grand bathroom, oversized closets and easy access to the library, office, spa and gym. Each of the six en-suite bedrooms offer a serene setting for family and guests, with generous layouts and spa-like baths. A lofted study and library are an inspirational place to work or relax as you look out upon the living rooms as well as the beautiful mountain scenery. Downstairs, the entertainment level has a spacious family room, fully equipped fitness area and a state of the art theater with a Dolby CPA 50 certified sound system, Barco projector and first run film screening capability. There is also a wine cave with dry stacked stone walls, barrel vaulted ceilings, two separate cellars for red or white wine and a private tasting room. The landscape is reminiscent of the European countryside, with rolling hills where elk can often be found grazing in the distance, showcasing sublime mountain scenery. Meticulously cared for by a team of specialists, this rare property, less than four miles from downtown Aspen, is a once in a generation masterpiece.",
  contact_info: "Contact: John Doe"
)

list2.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/2/2-1.png'),
  filename: '2-1.png'
)

list2.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/2/2-2.png'),
  filename: '2-2.png'
)

list2.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/2/2-3.png'),
  filename: '2-3.png'
)

list2.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/2/2-4.png'),
  filename: '2-4.png'
)

list2.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/2/2-5.png'),
  filename: '2-5.png'
)

list2.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/2/2-6.png'),
  filename: '2-6.png'
)

list2.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/2/2-7.png'),
  filename: '2-7.png'
)

list2.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/2/2-8.png'),
  filename: '2-8.png'
)

list3 = Listing.create!(
  user_id: 5,
  price: 76500000,
  lot_size: 2.8,
  living_area: rand(5000..15000),
  location: "Miami Beach, FL, United States",
  longitude: -80.139198,
  latitude: 25.793449,
  bedrooms: 7,
  full_baths: 7,
  half_baths: 2,
  garage: 4,
  built: 2021,
  description: "The ultimate waterfront residence for luxury living! Situated on prestigious North Bay Road in Miami Beach, this home boasts extraordinary west-facing city views with daily sunsets. 7 bedrooms, 7 bathrooms, 2 half-bathrooms residence with extravagant wet bar, indoor salt water fish pond with stingrays, home theater, chef's kitchen, gym, open floor plan with ample natural light with easy access to outdoors. This private + gated home with unmatched indoor/outdoor living spaces features a sensational roof top terrace, balconies, heated saltwater swimming pool + spa, covered summer kitchen with BBQ, full outdoor cabana bathroom, boat dock, 70' of waterfront, + 4-car garage with lift, elevator & generator",
  contact_info: "Contact: Emily Brown"
)

list3.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/3/3-1.png'),
  filename: '3-1.png'
)

list3.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/3/3-2.png'),
  filename: '3-2.png'
)

list3.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/3/3-3.png'),
  filename: '3-3.png'
)

list3.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/3/3-4.png'),
  filename: '3-4.png'
)

list3.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/3/3-5.png'),
  filename: '3-5.png'
)

list3.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/3/3-6.png'),
  filename: '3-6.png'
)

list3.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/3/3-7.png'),
  filename: '3-7.png'
)

list3.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/3/3-8.png'),
  filename: '3-8.png'
)

list4 = Listing.create!(
  user_id: 6,
  price: 27950000,
  lot_size: 1.22,
  living_area: 15000 ,
  location: "Tahoe City, Ca, CA, United States",
  longitude: -120.139618,
  latitude: 39.172045,
  bedrooms: 8,
  full_baths: 9,
  half_baths: 3,
  garage: 4,
  built: 2002,
  description: "Rockhaven Tahoe where privacy, exclusivity, and unparalleled luxury come together to create an exquisite lakefront estate. Situated on the south point of Meeks Bay, this stunning property spans 1.22 acres and boasts a 140 foot deep water pier, two buoys, sandy beach and an impressive 300 feet of shoreline along the crystal-clear waters of Lake Tahoe. With a gated entrance and surrounded by lush landscape, Rockhaven Tahoe ensures that every moment spent here is a tranquil private retreat. The estate comprises an impressive 15,000 square feet of living space with a total of 8 bedrooms, 10 full bathrooms and 3 half bathrooms in a grand main home and two attached guest houses, thoughtfully designed to have beautiful lake views from every room and access to the main home. Upon entering, you are greeted by a breathtaking sight - a Dale Chihuly Chandelier, custom-crafted by the renowned artist himself, adding a touch of artistic grandeur to the dining room. The 500-year-old hardwood floors hold their own history, having been sourced from a Monastery in France. Indulge in the finest details Rockhaven Tahoe has to offer. An elevator connects all three levels of the home, two home offices, gym, theater, and sauna provide the perfect combination of work and relaxation. Outdoors find 4 hot tubs, including 1 swim flume, 5 fire pits, 3 barbecues beckon you to unwind and take in the natural beauty surrounding you. Rockhaven Tahoe's location offers a harmonious blend of year-round activities. During the winter, ski enthusiasts will be delighted with Homewood and Palisades Ski Resorts minutes away. Revel in the magical winter wonderland while the state-of-the-art hydronic heating system and heated driveway keep you cozy and hassle-free. Summer, enjoy a plethora of water activities such as boating, kayaking, jet skiing, swimming, and even jumping on a water trampoline right from your own private shore. This private estate presents a unique opportunity to own a prestigious lakefront property that has been cherished by some of the world's wealthiest individuals for its unparalleled privacy and luxury. Embrace the serene beauty of Lake Tahoe and make Rockhaven Tahoe your private sanctuary today. Co-Listed with Portman Realty, James Portman.",
  contact_info: "Contact: William"
)

list4.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/4/4-1.png'),
  filename: '4-1.png'
)

list4.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/4/4-2.png'),
  filename: '4-2.png'
)

list4.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/4/4-3.png'),
  filename: '4-3.png'
)

list4.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/4/4-4.png'),
  filename: '4-4.png'
)

list4.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/4/4-5.png'),
  filename: '4-5.png'
)

list4.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/4/4-6.png'),
  filename: '4-6.png'
)

list5 = Listing.create!(
  user_id: 6,
  price: 35000000,
  lot_size: 4.25,
  living_area: 5200,
  location: "City Of South Lake Tahoe, CA, United States",
  longitude: -119.986649,
  latitude: 38.936604,
  bedrooms: 10,
  full_baths: 8,
  half_baths: 0,
  garage: 3,
  built: 1949,
  description: "Stunning luxury property with breathtaking views.",
  contact_info: "Contact: William"
)

list5.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/5/5-1.png'),
  filename: '5-1.png'
)

list5.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/5/5-2.png'),
  filename: '5-2.png'
)

list5.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/5/5-3.png'),
  filename: '5-3.png'
)

list5.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/5/5-4.png'),
  filename: '5-4.png'
)

list5.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/5/5-5.png'),
  filename: '5-5.png'
)

list6 = Listing.create!(
  user_id: 6,
  price: 28000000,
  lot_size: 1.1,
  living_area: 5342,
  location: "Laguna Beach, CA, United States",
  longitude: -117.777214,
  latitude: 33.541679,
  bedrooms: 5,
  full_baths: 4,
  half_baths: 2,
  garage: 2,
  built: 2002,
  description: "An oceanfront Mark Singer A.I.A.-designed residence with expansive coastline and Catalina Island views set atop a bluff in Victoria Beach - one of the most desirable enclaves of Southern California. Sited with intention to fully capture the endless Pacific vistas, this contemporary five-bedroom offering spans approximately 5,342 square feet of living area and multiple outdoor spaces. Down the floating staircase just beyond the private entryway lies a dramatic double-height great room framed by a wall of windows. Anchored by a standalone fireplace, a sitting area, a large dining section, a discreet wet bar, and the home’s kitchen with super-grade finishes as well as an oversized island create a harmonious entertaining space. Positioned to capture ocean views from every angle, this sun-drenched level extends to the outdoors via a courtyard patio on one end and a spacious terrace on the other. A bedroom currently used as an office completes this floor. The upper level is comprised exclusively of the water-facing owner’s quarters, with the primary ocean-view bedroom, bathroom, balcony, and dual closets occupying its entirety for ultimate privacy. The lower portion of this residence presents a secondary gathering area with a wet bar and a large oceanfront patio with a fire pit. Serene ocean vistas can be enjoyed from two of the three guest bedrooms on this level. Featuring the highest-end elements, including steel, poured concrete, and natural stone, this dramatic modern home features an elevator, smart home automation, and a two-car garage. An iconic yet convenient location within Laguna Beach with the city’s restaurants, boutiques, and world-class beaches just a stone’s throw away.",
  contact_info: "Contact: William"
)

list6.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/6/6-1.png'),
  filename: '6-1.png'
)

list6.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/6/6-2.png'),
  filename: '6-2.png'
)

list6.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/6/6-3.png'),
  filename: '6-3.png'
)

list7 = Listing.create!(
  user_id: 5,
  price: 46000000,
  lot_size: 24132240.0 ,
  living_area: 0,
  location: "Exumas, Bahamas",
  longitude: -75.96954650,
  latitude: 23.61925980,
  bedrooms: 0,
  full_baths: 0,
  half_baths: 0,
  garage: 0,
  built: 0,
  description: "This island is a very special one: it lies in one of the most beautiful parts of the Bahamas and boasts white sandy beaches and the potential for an airstrip. It has all the basic essentials for development. It is situated very near well-known island resorts and existing airstrips. Big Darby Island is located about 95 miles from Nassau, 14 miles from Great Exuma and 250 miles from Miami. It lies almost in the centre of the chain of some 360 islands known as the Exuma Cays -the yachting, sailing and fishing paradise of the Bahamas. The nearest islands are Rudder Cut Cay (with airstrip) and Musha Cay, both owned by illusionist David Copperfield. This island is surrounded by crystal clear turquoise waters and features several white sandy beaches -in all approx. 21,650 ft. of water frontage. The highest elevation is approx. 80 ft. which is exceptionally high for the Bahamas. The island can support a 3,000 ft. to 5,000 ft. runway and is adjacent to a deep protected natural harbour. An imposing 7,000-square-foot castle built by an Englishman, Sir Baxter, in 1938 is located on the island. The castle could be rebuilt into a spectacular home or clubhouse. A network of paths and walkways extends in southerly and westerly directions for a distance of 1.8 miles. This is a great opportunity to own a large island island in The Exuma Cays.",
  contact_info: "Contact: Emy"
)

list7.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/7/7-1.png'),
  filename: '7-1.png'
)

list7.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/7/7-2.png'),
  filename: '7-2.png'
)

list7.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/7/7-3.png'),
  filename: '7-3.png'
)

list8 = Listing.create!(
  user_id: 3,
  price: 78000000,
  lot_size: 1.8,
  living_area: 14600,
  location: "Saint-Tropez, Var, France",
  longitude: 6.640711,
  latitude: 43.267681,
  bedrooms: 12,
  full_baths: 12,
  half_baths: 0,
  garage: 6,
  built: 1960,
  description: "This ensemble comprising three villas (1460 sqm of living space in total) is set in 1.8 hectares of grounds in the prestigious and secure Domaine des Parcs residence.
  Designed by architect John Pawson, the 530 sqm, 480 sqm and 440 sqm villas all boast panoramic views of the sea and Canebiers Bay.
  The first 530 sqm villa includes a spacious living/reception room, a dining room, an equipped kitchen, three suites, a study, a self-contained guest apartment, staff accommodation and a screening room.
  The garden features a 20 x 6 metre swimming pool, terraces and vineyards.
  The second 440 sqm villa includes a living/reception room, a dining room, an equipped kitchen, four suites and a gym.
  It also benefits from a 20 x 6 metre mirror swimming pool and wide terraces.
  The third 480 sqm villa is totally independent, and includes a living/reception room, a dining room, an equipped kitchen, four suites, a staff suite, a well-being area with a hammam, and a screening room.
  This also benefits from a superb mirror swimming pool and a wide terrace.
  The villas may be acquired separately.
  An exceptional ensemble in one of the globe’s most renowned and prestigious location",
  contact_info: "Contact: Ms Smith"
)

list8.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/8/8-1.png'),
  filename: '8-1.png'
)

list8.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/8/8-2.png'),
  filename: '8-2.png'
)

list8.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/8/8-3.png'),
  filename: '8-3.png'
)

list8.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/8/8-4.png'),
  filename: '8-4.png'
)

list8.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/8/8-5.png'),
  filename: '8-5.png'
)

list8.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/8/8-6.png'),
  filename: '8-6.png'
)

list9 = Listing.create!(
  user_id: 3,
  price: 28000000,
  lot_size: 0.01,
  living_area: 520,
  location: "Monaco, Monaco",
  longitude: 7.416667,
  latitude: 43.733334,
  bedrooms: 3,
  full_baths: 2,
  half_baths: 1,
  garage: 2,
  built: 2022,
  description: "In a high standing building in the heart of the golden square, the exceptional 6 room apartment offering a large terrace with garden and privative swimming pool.",
  contact_info: "Contact: Ms Smith"
)

list9.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/9/9-1.png'),
  filename: '9-1.png'
)

list9.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/9/9-2.png'),
  filename: '9-2.png'
)

# list9.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/9/9-3.png'),
#   filename: '9-3.png'
# )

# list9.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/9/9-4.png'),
#   filename: '9-4.png'
# )

list10 = Listing.create!(
  user_id: 3,
  price: 25000000,
  lot_size: 0.81,
  living_area: 10903,
  location: "Antibes, Alpes-Maritimes, France",
  longitude: 7.125102,
  latitude: 43.580418,
  bedrooms: 14,
  full_baths: 9,
  half_baths: 2,
  garage: 5,
  built: 1870,
  description: "Discover this exceptional castle located in the heart of Antibes Centre. Built in 1870, this property seamlessly blends history with contemporary opulence, offering a remarkable living experience.

  With its main castle, two guest houses, and an independent apartment, the estate features 14 bedrooms and 10 bathrooms. Every detail reflects meticulous craftsmanship and impeccable design.
  
  The main castle boasts elegant living spaces, a gourmet kitchen, and a refined dining area. The 14 bedrooms, including a luxurious master suite, ensure comfort for all residents and guests.
  
  Indulge in the private cinema, spa with sauna and hammam, heated swimming pool, and summer kitchen for moments of relaxation and entertainment. Several parking spaces are also available.
  
  Situated in the heart of Antibes Centre, this prestigious property provides easy access to world-class amenities and the vibrant atmosphere of the French Riviera.",
  contact_info: "Contact:  Ms Smith"
)

list10.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/10/10-1.png'),
  filename: '10-1.png'
)

list10.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/10/10-2.png'),
  filename: '10-2.png'
)

# list10.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/10/10-3.png'),
#   filename: '10-3.png'
# )

# list10.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/10/10-4.png'),
#   filename: '10-4.png'
# )

# list10.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/10/10-5.png'),
#   filename: '10-5.png'
# )

# list10.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/10/10-6.png'),
#   filename: '10-6.png'
# )

# list10.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/10/10-7.png'),
#   filename: '10-7.png'
# )

list11 = Listing.create!(
  user_id: 3,
  price: 22000000,
  lot_size: 0.45,
  living_area: 4780,
  location: "Saint-Jean-Cap-Ferrat, Alpes-Maritimes, France",
  longitude: 7.331,
  latitude: 43.961,
  bedrooms: 5,
  full_baths: 3,
  half_baths: 3,
  garage: 3,
  built: 2012,
  description: "This villa in perfect condition is located in a very quiet and residential area of Cap-Ferrat - just next door to the Grand Hotel Four Seasons with its very practical and comfortable 'logistics' and also very close to the sea.

  The 3 levels of the villa comprise : a large sitting / dining area with fire place opetning onto a large and comfortable terrace, 4 bedrooms each with its bathroom or shower room, an independent studio, a fitness room and a saune, a wine cellar. Large garage for 3 cars.
  
  The large garden of 1.840 sq.m. is flat and useable. The first floor (bedrooms level) offers a very nice sea view.
  The ideal South and West exposure gets the best sun.
  There is also a very nice swimming pool at the end of the sitting / dining room terrace.
  
  The house in perfect condition and without any surprises...",
  contact_info: "Contact:  Ms Smith"
)

list11.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/11/11-1.png'),
  filename: '11-1.png'
)

list11.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/11/11-2.png'),
  filename: '11-2.png'
)

list11.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/11/11-3.png'),
  filename: '11-3.png'
)

list12 = Listing.create!(
  user_id: 3,
  price: 35000000,
  lot_size: 2,
  living_area: 4373,
  location: "Montreux, Switzerland",
  longitude: 6.910680,
  latitude: 46.431221,
  bedrooms: 14,
  full_baths: 12,
  half_baths: 4,
  garage: 14,
  built: 1864,
  description: "
  - This incredible property filled with history is located in the heart of Montreux a few meters from the lake
  - Beautiful plot of 4,373 very well planted.
  - The property includes many rooms with beautiful volumes
  - Garage for 14 vehicles and several outdoor spaces complete this exceptional property.
  - A shooting range, a large wine cellar and a fitness area have been set up in the basement.
  - Ideal for a clinic, school, embassy, ​​sports association, head office, office, etc...",
  contact_info: "Contact: Ms Smith"
)

list12.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/12/12-1.png'),
  filename: '12-1.png'
)

list12.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/12/12-2.png'),
  filename: '12-2.png'
)

list12.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/12/12-3.png'),
  filename: '12-3.png'
)

# list12.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/12/12-4.png'),
#   filename: '12-4.png'
# )

list13 = Listing.create!(
  user_id: 4,
  price: 39000000,
  lot_size: 1.09,
  living_area: 17812,
  location: "Fort Lauderdale, FL, United States",
  longitude: -80.137314,
  latitude: 26.122438,
  bedrooms: 9,
  full_baths: 9,
  half_baths: 4,
  garage: 7,
  built: 2005,
  description: "Gated Palatial Palm Beach-Inspired Point Estate sited in the prestigious Coral Ridge Country Club enclave on over 1.09 acre +/- framed by 3 amazing sides of wrap-around water frontage totaling 665 ft +/- of full-service mega-yacht dockage. This Trophy mansion offered furnished and was artfully designed by architect, William Storrs, and crafted by WA Bentz Construction with the finest materials & finishes, boasting nearly 24,000 sq ft +/- capturing stunning water views from every major room, including a separate carriage/guest house. Modern smart-house with fingertip control for all systems; whole-house generator, commercial elevator & 102 ft +/- long waterside resort-style pool. Verdant formal gardens with meandering paths of ultimate privacy lead to a 7 bay garage for the car connoisseur.",
  contact_info: "call Mike"
)

list13.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/13/13-1.png'),
  filename: '13-1.png'
)

list14 = Listing.create!(
  user_id: 4,
  price: 21500000,
  lot_size: 20,
  living_area: 15394,
  location: "Austin, TX, United States",
  longitude: -97.743061,
  latitude: 30.267153,
  bedrooms: 6,
  full_baths: 7,
  half_baths: 6,
  garage: 20,
  built: 2004,
  description: "'Villa Del Lago' is a uniquely magnificent estate situated on 20+ hillside acres of prime south shore lakefront property boasting unobstructed and panoramic elevated views of Lake Travis. Close to the main house a dramatic pavilion with fireplace, two bars, and two baths, sits exclusively on a hillside hollow with captivating, breath-taking views of the lake and big Texas sunsets – a perfect venue for special events. Meticulously designed and professionally landscaped lawns and gardens feature native plants, trees, shrubs, in addition to extensive seasonal plantings, all accented with comprehensive landscaping lighting. Elegant and striking grotto with multiple dramatic cascading waterfalls is carved into the canyon hillside, along with stone staircases, bridge, and fish pond, all naturally blended into the hillside between main house and pavilion.

  With lake views from nearly every room, the main house of nearly 15,400 square feet, features 6 bedrooms, 13 baths, 5 fireplaces, media room, home theater, library, hearth/formal living room, formal dining, wine cellar, and massage room. Gourmet chef’s kitchen features Viking appliances, triple ovens, built-in fridge, and coffee machine, large center island with breakfast bar seating, separate bar island, and high-grade granite and marble counters. Extensive entertainment bar, game room, sitting, and piano area. A large private master suite features steam showers, his & her closets and bathrooms, garden Jacuzzi tub, and walk-out bedroom balcony. 
  
  A negative edge pool comes complete with an outdoor bath, slide, hot tub, fire pit, built-in grill, smoker, and mini-fridges.
  
  This is truly one of the finest luxury waterfront estates in all of Austin.",
  contact_info: "call Mike"
)

list14.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/14/14-1.png'),
  filename: '14-1.png'
)

list15 = Listing.create!(
  user_id: 4,
  price: 20000000,
  lot_size: 206,
  living_area: 6191,
  location: "Washington, NY, United States",
  longitude: -73.7973,
  latitude: 41.7469,
  bedrooms: 4,
  full_baths: 4,
  half_baths: 1,
  garage: 5,
  built: 1860,
  description: "Once the property of Andrew Carnegie's only child Margaret Carnegie Miller, this idyllic retreat with an updated 1860's antique main home and French architect-designed stable is sited on 206 secluded and completely unrestricted acres in the heart of Millbrook Hunt Country. Hallmark Farm's rolling hills and ever-changing views of the Catskills, epitomize the area's storied country life - the legendary Millbrook Hunt gallops across this very land! This extraordinary stretch of landscape, minutes from Millbrook Village, offers the ultimate luxury for you and your family: privacy, size and security. Completely renovated and expanded in 2003, the 4 bedroom/4.5 bathroom main house features wide board pine floors, reclaimed from trees cleared on the property. The quintessential pastoral experience includes the dramatic living room with 20 ft. coffered ceilings, wood burning fireplace and transom-topped French doors facing south, west and north. A chef's kitchen and charming breakfast room that faces east for the morning sun. Additionally a FDR with f/p and French doors, a paneled library with f/p, office, and pdr room round out the first floor. Two guest suites with full baths on the 2nd floor, plus primary bedroom encompasses a bathroom, and dressing room. An elevator services 3 floors. The embellished interiors of Hallmark Farm's signature stable were designed by famed French architects Atelier Choiseul and are paneled with European beech, American oak and white pine. The stable includes ten 12' x 12' stalls, feed room, tack room, lounge and a hayloft. Two apartments accommodate farm managers and grooms, and a 3-bay garage, one with a truck and tractor lift. A shingled carriage house offers 3 apts, storage for 5 cars and a greenhouse wing. Paddocks varying in size from 6 to 12 acres, 4 with run-in sheds. Miles of pristine post-and-rail fencing and fields are ideal for healthy horse foraging. The estate's vast acreage includes an apple orchard, pond, multiple trails including a one-mile loop designed by A.E Bye and hunter trial course designed by local equestrian legend Tom Duggan, with ample room for a myriad of recreational pursuits. This is a rare opportunity to own an estate with the provenance and quality of Hallmark Farm. The current owners have enjoyed it for 40 happy years. Don't miss your chance to call this prized equestrian estate your own.",
  contact_info: "call Mike"
)

list15.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/15/15-1.png'),
  filename: '15-1.png'
)

list15.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/15/15-2.png'),
  filename: '15-2.png'
)

# list15.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/15/15-3.png'),
#   filename: '15-3.png'
# )

# list15.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/15/15-4.png'),
#   filename: '15-4.png'
# )

# list15.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/15/15-5.png'),
#   filename: '15-5.png'
# )

# list15.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/15/15-6.png'),
#   filename: '15-6.png'
# )

# list15.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/15/15-7.png'),
#   filename: '15-7.png'
# )

list16 = Listing.create!(
  user_id: 4,
  price: 48000000,
  lot_size: 3387,
  living_area: 17493,
  location: "Springville, UT, United States",
  longitude: -111.610753,
  latitude: 40.165233,
  bedrooms: 72,
  full_baths: 6,
  half_baths: 3,
  garage: 8,
  built: 2007,
  description: "Hobble Creek Ranch is one of the most magnificent properties in the American West. It offers a truly unique proposition—a stunning estate home with a backyard playground extending over 3,387 acres (over 4.5 miles wide) of spectacular recreational lands. The property has substantial water rights with seven ponds and it controls access to over ten thousand acres of forest service lands. The ranch varies in elevation from 5,700 feet to over 9,100 feet and has extensive roads and trails that provide access throughout the property. Hobble Creek Ranch is ideally suited for cattle and horses, while the big game elk and deer hunting opportunities are incredible. The home is securely positioned behind two gates and is surrounded by nearly twenty beautifully manicured acres. Every element of the home was built to the highest standards, and the finish work and detail are unrivaled. The location is really special. You feel like you are miles and miles away from anyone, yet there is a golf course ten minutes away and a grocery store fifteen minutes away. Hobble Creek Ranch is situated at the end of a paved road in Hobble Creek Canyon, which is about an hour from Salt Lake City and Park City, and about thirty minutes from a private airport. Additional information can be provided to qualified buyers.",
  contact_info: "call Mike"
)

list16.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/16/16-1.png'),
  filename: '16-1.png'
)

# list16.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/16/16-2.png'),
#   filename: '16-2.png'
# )

# list16.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/16/16-3.png'),
#   filename: '16-3.png'
# )

# list16.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/16/16-4.png'),
#   filename: '16-4.png'
# )

# list16.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/16/16-5.png'),
#   filename: '16-5.png'
# )

# list16.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/16/16-6.png'),
#   filename: '16-6.png'
# )

# list16.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/16/16-7.png'),
#   filename: '16-7.png'
# )

list17 = Listing.create!(
  user_id: 6,
  price: 70000000,
  lot_size: 19.78,
  living_area: 15000,
  location: "Summerland, CA, United States",
  longitude: -119.59651,
  latitude: 34.4213845,
  bedrooms: 12,
  full_baths: 15,
  half_baths: 8,
  garage: 10,
  built: 2016,
  description: "This spectacular 19.78+/- acre estate adjacent to Montecito CA, is one of the grandest properties in North America & an homage to Neoclassism. Extensive luxury living space in its primary residence, guesthouse, & private polo clubhouse suites. The beautiful grounds feature a polo field, butterfly preserve & pond, 15-stall horse stable,128-foot infinity-edge pool, & breathtaking panoramic ocean & mountain views. The primary residence hosts complete formal living & dining rooms, gourmet kitchen, wellness center, nightclub with marble dance floor, sports bar, movie theatre, & 5,000 bottle wine cellar & tasting room. The finest workmanship, materials, & custom fixtures, & unprecedented amenities plus regal yet welcoming living spaces combine to create an unforgettable sanctuary.",
  contact_info: "Contact: William"
)

list17.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/17/17-1.png'),
  filename: '17-1.png'
)

list17.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/17/17-2.png'),
  filename: '17-2.png'
)

# list17.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/17/17-3.png'),
#   filename: '17-3.png'
# )

# list17.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/17/17-4.png'),
#   filename: '17-4.png'
# )

# list17.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/17/17-5.png'),
#   filename: '17-5.png'
# )

# list17.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/17/17-6.png'),
#   filename: '17-6.png'
# )

# list17.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/17/17-7.png'),
#   filename: '17-7.png'
# )

list18 = Listing.create!(
  user_id: 6,
  price: 22500000,
  lot_size: 2.42,
  living_area: 8200,
  location: "Pebble Beach, CA, United States",
  longitude: -121.9474556,
  latitude: 36.5666274,
  bedrooms: 7,
  full_baths: 7,
  half_baths: 1,
  garage: 4,
  built: 1991,
  description: "Positioned on the 12th hole of renowned Pebble Beach Golf Links, The Estate on 12 is a sophisticated, private, and luxurious ocean view property. Its gated, beautifully manicured 2.42-acre parcel is among the largest properties on the course. The estate affords ideal proximity and access to the coveted five-star amenities of the Lodge and \"downtown\" Pebble Beach. Built in a Cape Dutch style with seven bedrooms and seven full and one-half bathrooms with spacious rooms and approximately 8,200 sq ft of vast living spaces, delivering the ultimate flexibility and flow for large scale or intimate entertaining. An ideal floor plan for multi-generational living and family entertaining. Soak in the beauty and scenery of this natural setting and viewing terraces which come to life during events providing front row seats to the AT&T Pro-Am, US Open and Concours d'Elegance. Easy access to downtown Carmel and Carmel Beach, this estate, built in 1991, features unique architectural style and a near perfect combination of positioning and privacy.",
  contact_info: "Contact: William"
)

list18.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/18/18-1.png'),
  filename: '18-1.png'
)

list18.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/18/18-2.png'),
  filename: '18-2.png'
)

list18.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/18/18-3.png'),
  filename: '18-3.png'
)

list18.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/18/18-4.png'),
  filename: '18-4.png'
)

# list18.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/18/18-5.png'),
#   filename: '18-5.png'
# )

# list18.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/18/18-6.png'),
#   filename: '18-6.png'
# )

# list18.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/18/18-7.png'),
#   filename: '18-7.png'
# )

list19 = Listing.create!(
  user_id: 5,
  price: 55000000,
  lot_size: 236.82,
  living_area: 14997,
  location: "Scottsdale, AZ, United States",
  longitude: -111.89903,
  latitude: 33.50921,
  bedrooms: 9,
  full_baths: 7,
  half_baths: 0,
  garage: 6,
  built: 1996,
  description: "Located on approx. 237 acres on the edge of Scottsdale, this one-of-a-kind property perfectly captures the essence of the Southwest. Stunning 360-degree views combine with the peace and solitude of the Sonoran Desert to create a private oasis while all the best of Scottsdale's amenities are just minutes away. The 8,700 SF main residence is modeled after an Argentinian estancia and is grand, yet comfortable. Additional amenities include a large greenhouse and potting shed, tennis court, pool and shooting range. Additional buildings include a 1,900 SF guest house, a 1,500 SF caretakers' cottage and a 2,800 SF office/art museum. World-class equestrian facilities include a six-stall stable, 16-stall mare motel, numerous corrals, pastures and several outbuildings. Plentiful water with two

  25,000-gallon storage tanks. Hydrology study is currently underway.",
  contact_info: "Contact: Emy"
)

list19.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/19/19-1.png'),
  filename: '19-1.png'
)

list19.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/19/19-2.png'),
  filename: '19-2.png'
)

# list19.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/19/19-3.png'),
#   filename: '19-3.png'
# )

# list19.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/19/19-4.png'),
#   filename: '19-4.png'
# )

# list19.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/19/19-5.png'),
#   filename: '19-5.png'
# )

# list19.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/19/19-6.png'),
#   filename: '19-6.png'
# )

list20 = Listing.create!(
  user_id: 5,
  price: 100000000,
  lot_size: 740,
  living_area: 24000,
  location: "Granite Springs, NY, United States",
  longitude: -73.4525,
  latitude: 41.1837,
  bedrooms: 8,
  full_baths: 8,
  half_baths: 4,
  garage: 18,
  built: 2010,
  description: "Steeped in history and masterfully created by savvy and insightful owners, driven by passion, their singular vision was brought to life with a spectacular end result. Stonewall Farm represents nearly 50 years of planning, expert oversight and superbly curated collection. The majestic 24,000 square-foot residence features treasures from far and wide that adorn the most elegant and eclectic palettes. Nothing was left to happenstance with each unique aspect individually sourced yet seamlessly blended together to define a home of sublime and timeless sophistication. Adjacent to the main home is a magnificent 4,000 square-foot pavilion style pool house with 60-foot swimming pool, lounge seating area, fireplace, spa, gym, changing rooms, kitchen and flanked by French Doors that open to the rose garden and terraces, one of the four formal garden areas. Each glance offers views of green vistas, wisteria-clad columns, trellised walkways, all es of trees and meticulously tended grounds. The magnificent and expansive property encompasses 740 acres divided into 18 parcels of broad lawns, fenced paddocks, equestrian training facilities, barns, run-in sheds and guest and staff quarters dedicated to the breeding and training of thoroughbred race horses. These world class equestrian facilities represent the largest privately held parcel in Westchester, just 1 hour North of New York City offering easy access to/from anywhere in the world. An additional unique 36,000 sf building resides on the north westerly portion of the property. Formerly the Granite Springs Bottling Co. and leased at one time by a major bank, with offices, residential accommodations and separate access to the a business district, enormous opportunity for an automobile collector's showroom, residential development, recreation or whatever one can imagine awaits creative vision, with this massive stone and frame structure as part of it. Offering the finest in both luxury and equestrian facilities, the investment value in this offering lies in what is still yet to be conceived. This is a once-in-a-lifetime opportunity to acquire one of the area's largest and most significant estates with 18 separate but contiguous parcels. The investment and development potential is endless for making highest & best use of this property.Hold the vision, trust the process. Be the hero in your own movie.",
  contact_info: "Contact: Emy"
)

list20.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/20/20-1.png'),
  filename: '20-1.png'
)

list20.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/20/20-2.png'),
  filename: '20-2.png'
)

list20.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/20/20-3.png'),
  filename: '20-3.png'
)

list20.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/20/20-4.png'),
  filename: '20-4.png'
)

list20.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/20/20-5.png'),
  filename: '20-5.png'
)

list20.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/20/20-6.png'),
  filename: '20-6.png'
)

list21 = Listing.create!(
  user_id: 5,
  price: 60000000,
  lot_size: 509,
  living_area: 20861,
  location: "Snowmass Village, CO, United States",
  longitude: -106.965288,
  latitude: 39.214104,
  bedrooms: 9,
  full_baths: 12,
  half_baths: 4,
  garage: 6,
  built: 2004,
  description: "Over 500 secluded acres set behind the gates of Wildcat Ranch, one of the most private and exclusive properties in all of the Roaring Fork Valley, only minutes to Aspen. 18,946sf main residence and 1,915sf guesthouse designed by Bill Poss, barn, multiple garages for cars and toys, a pool and pool house, paddle ball court, five ponds, landscaped gardens and sweeping open land make up this compound of timeless grandeur and distinction. This European-style stone chalet is a statement in timeless sophistication, meticulously finished and appointed with modern-day luxuries for multiple generations to enjoy year-round: two offices, a wine room, media room, and lower wellness level which includes two massage rooms, gym, hot tub room and steam room. Views of Snowmass Mountain, Mt. Daly, andCapitol Peak are captured from the outdoor stone terrace, which spans the entire length of the home and overlooks the pool, creeks, and pond. Wildcat subdivision offers boating on a 50 acre lake, 30 miles of horseback riding trails, a rodeo arena, saddle horses, and an on-site staff. This private refuge provides access to world-class recreation, resort amenities, and stunning natural beauty. Capitol Peak are captured from the outdoor stone terrace, which spans the entire length of the home and overlooks the pool, creeks, and pond. Wildcat subdivision offers boating on a 50 acre lake, 30 miles of horseback riding trails, a rodeo arena, saddle horses, and an on-site staff. This private refuge provides access to world-class recreation, resort amenities, and stunning natural beauty.",
  contact_info: "Contact: Emy"
)

# list21.photos.attach(
#   io: URI.open('https://velvetvenues-dev.s3.us-west-1.amazonaws.com/2/2-1.png'),
#   filename: '21-1'
# )

# list21.photos.attach(
#   io: URI.open('https://velvetvenues-dev.s3.us-west-1.amazonaws.com/2/2-1.png'),
#   filename: '21-2'
# )

# list21.photos.attach(
#   io: URI.open('https://velvetvenues-dev.s3.us-west-1.amazonaws.com/2/2-1.png'),
#   filename: '21-3'
# )

# list21.photos.attach(
#   io: URI.open('https://velvetvenues-dev.s3.us-west-1.amazonaws.com/2/2-1.png'),
#   filename: '21-4'
# )

# list21.photos.attach(
#   io: URI.open('https://velvetvenues-dev.s3.us-west-1.amazonaws.com/2/2-1.png'),
#   filename: '21-5'
# )

# list21.photos.attach(
#   io: URI.open('https://velvetvenues-dev.s3.us-west-1.amazonaws.com/2/2-1.png'),
#   filename: '21-6'
# )

# list21.photos.attach(
#   io: URI.open('https://velvetvenues-dev.s3.us-west-1.amazonaws.com/2/2-1.png'),
#   filename: '21-7'
# )

# list21.photos.attach(
#   io: URI.open('https://velvetvenues-dev.s3.us-west-1.amazonaws.com/2/2-1.png'),
#   filename: '21-8'
# )

list22 = Listing.create!(
  user_id: 18,
  price: 78800000,
  lot_size: 8,
  living_area: 47182,
  location: "Bradbury, CA, United States",
  longitude: -117.97444,
  latitude: 34.14944,
  bedrooms: 7,
  full_baths: 7,
  half_baths: 3,
  garage: 10,
  built: 2011,
  description: "This regal masterpiece in guard-gated Bradbury Estates, sits on a promontory with unparalleled city, canyon and ocean views. The location was ranked by Forbes as one of the most expensive ZIP codes in America. This sprawling compound with multiple structures was magnificently realized after more than 8 years of construction by consummate craftsmen with meticulous attention to detail, using only the finest materials from around the world.

  The Main House is approximately 30,000 square feet plus 3,000 square feet of Loggias, 2 Master Suites, a 2 story Library, Chef's Kitchen with pizza oven, a walk-in butler’s pantry, both walk-in refrigerator and freezer. Additionally featured is a large 3D Theater, 2,000-bottle Wine Cellar, Elevator, and a poker room with its own bar and built-in humidor.
  
  The detached Guesthouse with full kitchen sits above the 10 car Garage, both totaling 6,700 sq. ft. From the hand-rubbed cherry wood floors to the forged iron custom made chandelier, this private guest retreat offers more than the average amenities.
  
  The 5,716 sq. ft. Pool House comes complete with an expansive kitchen, a state of the art Cybex gym, a massage room, and a subterranean EPA certified 25 yard shooting range.
  
  On almost 8 acres is the elevated infinity-edge pool, placed center courtyard, with 350,000-gallons, a 15 person spa, and a temperature-controlled Trout Pond with a 2 story Waterfall.
  
  There is close to one acre of porches, decks, loggias, and walkways hewn of French limestone. One is brought to the Main House, elevated in a Palladian Neo-Classical style by way of a dramatic 600-foot Blue Stone private entry drive that ends in a circular flow entrance that allows for 60-foot truck access, or multiple limousines.
  
  This once in a lifetime trophy property with the highest level of artistic craftsmanship, state of the art engineering, and consummate attention to detail has never before been offered for sale; it belongs in the portfolio of the most astute collector.",
  contact_info: "Message me"
)

list22.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/22/22-1.png'),
  filename: '22-1.png'
)

list22.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/22/22-2.png'),
  filename: '22-2.png'
)

list22.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/22/22-3.png'),
  filename: '22-3.png'
)

list22.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/22/22-4.png'),
  filename: '22-4.png'
)

list22.photos.attach(
  io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/22/22-5.png'),
  filename: '22-5.png'
)

# list22.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/22/22-6.png'),
#   filename: '22-6.png'
# )

# list22.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/22/22-7.png'),
#   filename: '22-7.png'
# )

# list22.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/22/22-8.png'),
#   filename: '22-8.png'
# )

# list22.photos.attach(
#   io: URI.open('https://velvetvenues-seeds.s3.us-west-1.amazonaws.com/22/22-9.png'),
#   filename: '22-9.png'
# )



puts "Listings seeded successfully!"

# Seed ListingsAmenities
400.times do |i|
  listing_id = rand(1..22)
  amenity_id = rand(1..20)
  
  unless ListingsAmenity.exists?(listing_id: listing_id, amenity_id: amenity_id)
    ListingsAmenity.create!(listing_id: listing_id, amenity_id: amenity_id)
  end
  
end

puts "ListingsAmenities seeded successfully!"

favorite1 = Favorite.create!(user_id: demo_user.id, listing_id: list12.id)
favorite2 = Favorite.create!(user_id: demo_user.id, listing_id: list22.id)
favorite3 = Favorite.create!(user_id: demo_user.id, listing_id: list10.id)
favorite4 = Favorite.create!(user_id: user1.id, listing_id: list5.id)
favorite5 = Favorite.create!(user_id: user1.id, listing_id: list1.id)
favorite6 = Favorite.create!(user_id: realtor2.id, listing_id: list2.id)
favorite7 = Favorite.create!(user_id: realtor2.id, listing_id: list1.id)
favorite8 = Favorite.create!(user_id: realtor2.id, listing_id: list3.id)

puts "Favorites seeded successfully!"