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
user1 =  User.create!(
  email: "john1@example.com",
  username: "rockit",
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

# list14 = Listing.create!(
#   user_id: 4,
#   price: rand(20000000..100000000),
#   lot_size: rand(1..50),
#   living_area: rand(5000..15000),
#   location: "Luxury Street #{i + 1}",
#   longitude: rand(-180.0..180.0),
#   latitude: rand(-90.0..90.0),
#   bedrooms: rand(5..10),
#   full_baths: rand(3..8),
#   half_baths: rand(0..3),
#   garage: rand(1..10),
#   built: rand(1960..2023),
#   description: "Stunning luxury property with breathtaking views.",
#   contact_info: "call Mike"
# )

# list15 = Listing.create!(
#   user_id: 4,
#   price: rand(20000000..100000000),
#   lot_size: rand(1..50),
#   living_area: rand(5000..15000),
#   location: "Luxury Street #{i + 1}",
#   longitude: rand(-180.0..180.0),
#   latitude: rand(-90.0..90.0),
#   bedrooms: rand(5..10),
#   full_baths: rand(3..8),
#   half_baths: rand(0..3),
#   garage: rand(1..10),
#   built: rand(1960..2023),
#   description: "Stunning luxury property with breathtaking views.",
#   contact_info: "call Mike"
# )

# list16 = Listing.create!(
#   user_id: 4,
#   price: rand(20000000..100000000),
#   lot_size: rand(1..50),
#   living_area: rand(5000..15000),
#   location: "Luxury Street #{i + 1}",
#   longitude: rand(-180.0..180.0),
#   latitude: rand(-90.0..90.0),
#   bedrooms: rand(5..10),
#   full_baths: rand(3..8),
#   half_baths: rand(0..3),
#   garage: rand(1..10),
#   built: rand(1960..2023),
#   description: "Stunning luxury property with breathtaking views.",
#   contact_info: "call Mike"
# )

# list17 = Listing.create!(
#   user_id: 6,
#   price: rand(20000000..100000000),
#   lot_size: rand(1..50),
#   living_area: rand(5000..15000),
#   location: "Luxury Street #{i + 1}",
#   longitude: rand(-180.0..180.0),
#   latitude: rand(-90.0..90.0),
#   bedrooms: rand(5..10),
#   full_baths: rand(3..8),
#   half_baths: rand(0..3),
#   garage: rand(1..10),
#   built: rand(1960..2023),
#   description: "Stunning luxury property with breathtaking views.",
#   contact_info: "Contact: William"
# )

# list18 = Listing.create!(
#   user_id: 6,
#   price: rand(20000000..100000000),
#   lot_size: rand(1..50),
#   living_area: rand(5000..15000),
#   location: "Luxury Street #{i + 1}",
#   longitude: rand(-180.0..180.0),
#   latitude: rand(-90.0..90.0),
#   bedrooms: rand(5..10),
#   full_baths: rand(3..8),
#   half_baths: rand(0..3),
#   garage: rand(1..10),
#   built: rand(1960..2023),
#   description: "Stunning luxury property with breathtaking views.",
#   contact_info: "Contact: William"
# )

# list19 = Listing.create!(
#   user_id: 5,
#   price: rand(20000000..100000000),
#   lot_size: rand(1..50),
#   living_area: rand(5000..15000),
#   location: "Luxury Street #{i + 1}",
#   longitude: rand(-180.0..180.0),
#   latitude: rand(-90.0..90.0),
#   bedrooms: rand(5..10),
#   full_baths: rand(3..8),
#   half_baths: rand(0..3),
#   garage: rand(1..10),
#   built: rand(1960..2023),
#   description: "Stunning luxury property with breathtaking views.",
#   contact_info: "Contact: Emy"
# )

# list20 = Listing.create!(
#   user_id: 5,
#   price: rand(20000000..100000000),
#   lot_size: rand(1..50),
#   living_area: rand(5000..15000),
#   location: "Luxury Street #{i + 1}",
#   longitude: rand(-180.0..180.0),
#   latitude: rand(-90.0..90.0),
#   bedrooms: rand(5..10),
#   full_baths: rand(3..8),
#   half_baths: rand(0..3),
#   garage: rand(1..10),
#   built: rand(1960..2023),
#   description: "Stunning luxury property with breathtaking views.",
#   contact_info: "Contact: Emy"
# )

# list21 = Listing.create!(
#   user_id: rand(1..5),
#   price: rand(20000000..100000000),
#   lot_size: rand(1..50),
#   living_area: rand(5000..15000),
#   location: "Luxury Street #{i + 1}",
#   longitude: rand(-180.0..180.0),
#   latitude: rand(-90.0..90.0),
#   bedrooms: rand(5..10),
#   full_baths: rand(3..8),
#   half_baths: rand(0..3),
#   garage: rand(1..10),
#   built: rand(1960..2023),
#   description: "Stunning luxury property with breathtaking views.",
#   contact_info: "Contact: 123"
# )

# list22 = Listing.create!(
#   user_id: rand(1..5),
#   price: rand(20000000..100000000),
#   lot_size: rand(1..50),
#   living_area: rand(5000..15000),
#   location: "Luxury Street #{i + 1}",
#   longitude: rand(-180.0..180.0),
#   latitude: rand(-90.0..90.0),
#   bedrooms: rand(5..10),
#   full_baths: rand(3..8),
#   half_baths: rand(0..3),
#   garage: rand(1..10),
#   built: rand(1960..2023),
#   description: "Stunning luxury property with breathtaking views.",
#   contact_info: "Contact: 123"
# )



puts "Listings seeded successfully!"

# Seed ListingsAmenities
100.times do |i|
  ListingsAmenity.create!(
    listing_id: rand(1..13),
    amenity_id: rand(1..20)
  )
end

puts "ListingsAmenities seeded successfully!"