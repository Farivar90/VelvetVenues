class Api::VotesController < ApplicationController
  def create
    Rails.logger.info("Current user: #{current_user.inspect}")
    @vote = current_user.votes.build(vote_params)
    Rails.logger.info("Built vote: #{@vote.inspect}")
    @vote.forum_post_id = params[:forum_post_id]
    Rails.logger.info("Assigned post ID: #{@vote.forum_post_id}")
  
    if @vote.save
        render json: @vote, status: :created
    else
        Rails.logger.info("Errors: #{@vote.errors.full_messages}")
        render json: {errors: @vote.errors.full_messages}, status: :unprocessable_entity
    end
  end
  
  


    def show
      @vote = Vote.find(params[:id])
      render json: @vote
    end
  
    def destroy
      @vote = Vote.find(params[:id])
      @vote.destroy
      render json: { message: 'success' }
    end
  
    private
  
    def vote_params
      params.require(:vote).permit(:forum_post_id, :value)
    end
  end
  