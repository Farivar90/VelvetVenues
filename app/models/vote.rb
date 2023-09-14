class Vote < ApplicationRecord
    belongs_to :user
    belongs_to :forum_post
  
    validates :user_id, uniqueness: { scope: :forum_post_id, message: "has already voted on this post" }
end
  