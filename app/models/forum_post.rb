class ForumPost < ApplicationRecord
    belongs_to :user
    belongs_to :forum_thread

    has_many :votes, dependent: :destroy
    
    def total_votes
        votes.sum(:value)
    end

    def update_votes_count
        self.total_votes = self.votes.sum(:value)
        self.upvotes = self.votes.where(value: 1).count
        self.downvotes = self.votes.where(value: -1).count
        self.save
    end
    
end
