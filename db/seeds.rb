# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create!(
  email: 'user1@example.com',
  username: 'user1',
  full_name: 'User One',
  password: 'Password!123'
)

User.create!(
  email: 'user2@example.com',
  username: 'user2',
  full_name: 'User Two',
  password: 'secret456'
)