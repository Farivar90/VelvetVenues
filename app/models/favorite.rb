class Favorite < ApplicationRecord

  validates :user_id, :listing_id, presence: true
  validates_uniqueness_of :user_id, scope: :listing_id

  belongs_to :user

  belongs_to :listing

end
