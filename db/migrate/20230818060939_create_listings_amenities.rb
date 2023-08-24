class CreateListingsAmenities < ActiveRecord::Migration[6.0]
  def change
    create_table :listings_amenities do |t|
      t.bigint :listing_id, null: false
      t.bigint :amenity_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end

    add_foreign_key :listings_amenities, :listings, column: :listing_id
    add_foreign_key :listings_amenities, :amenities, column: :amenity_id
    add_index :listings_amenities, :listing_id
    add_index :listings_amenities, :amenity_id
  end
end


