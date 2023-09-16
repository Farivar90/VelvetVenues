class Api::VotesController < ApplicationController
    def create
      @vote = current_user.votes.build(vote_params)
      if @vote.save
        render json: @vote, status: :created
      else
        render json: @vote.errors, status: :unprocessable_entity
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
  