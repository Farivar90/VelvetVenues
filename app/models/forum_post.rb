class ForumPost < ApplicationRecord
    belongs_to :user
    belongs_to :forum_thread

    has_many :votes, dependent: :destroy
    
    def total_votes
        votes.sum(:value)
    end
end
