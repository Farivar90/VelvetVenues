class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.bigint :user_id, null: false
      t.float :price, null: false
      t.float :lot_size, null: false
      t.float :living_area, null: false
      t.string :location, null: false
      t.float :longitude
      t.float :latitude
      t.integer :bedrooms, null: false
      t.integer :full_baths, null: false
      t.integer :half_baths
      t.integer :garage
      t.integer :built, null: false
      t.text :description
      t.string :contact_info, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end

    add_foreign_key :listings, :users, column: :user_id
    add_index :listings, :user_id
    add_index :listings, :price
    add_index :listings, :lot_size
    add_index :listings, :living_area
    add_index :listings, :location
    add_index :listings, :bedrooms
    add_index :listings, :full_baths
  end
end
