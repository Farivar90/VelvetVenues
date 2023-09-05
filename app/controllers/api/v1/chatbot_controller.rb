# app/controllers/api/v1/chatbot_controller.rb

class Api::V1::ChatbotController < ApplicationController

  skip_before_action :verify_authenticity_token

    def chat
      response = Openai::Completion.create(
        model: "text-davinci-002",
        prompt: params[:message],
        max_tokens: 150
      )
      render json: { reply: response.choices.first.text.strip }
    end
  end
  