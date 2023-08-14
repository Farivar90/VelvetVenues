class Api::InvitationsController < ApplicationController
    def check_invitation
      code = params[:code]
      valid_invitations = ['test_1', 'test_2']
  
      is_valid = valid_invitations.include?(code)
      render json: { isValid: is_valid }
    end
  end