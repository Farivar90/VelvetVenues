class Api::MessagesController < ApplicationController

  def index
    @messages = Message.includes(:sender, :receiver)
                       .where("sender_id = ? OR receiver_id = ?", current_user.id, current_user.id)
    render :index
  end
  
  

    def create
      @message = Message.new(message_params)
      if @message.save
        render json: @message, status: :created
      else
        render json: { error: "Error creating message", errors: @message.errors }, status: :unprocessable_entity
      end
    end


    def destroy
        @message = Message.find(params[:id])
        if @message.destroy
          render json: { message: "Message deleted" }
        else
          render json: { error: "Error deleting message" }, status: :unprocessable_entity
        end
    end
      
  
    private
    def message_params
      params.require(:message).permit(:sender_id, :receiver_id, :content)
    end
  end
  