class CreateAmenities < ActiveRecord::Migration[6.0]
  def change
    create_table :amenities do |t|
      t.string :amenity, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
  end
end