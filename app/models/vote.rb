class Vote < ApplicationRecord
    belongs_to :user
    belongs_to :forum_post
  
    validates :user_id, uniqueness: { scope: :forum_post_id, message: "has already voted on this post" }
    validates_inclusion_of :value, in: [1, -1], message: "can only be 1 (upvote) or -1 (downvote)"

end
  