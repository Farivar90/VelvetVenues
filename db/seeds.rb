# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# db/seeds.rb

demo_user = User.create!(
    id: 33,
  email: 'demo@example.com',
  username: 'demo_user',
  full_name: 'Demo User',
  password: 'Password!123',
  session_token: SecureRandom.base64(64)
)

puts "Demo user created with email: #{demo_user.email}"
