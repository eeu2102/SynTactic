class QuestionsController < ApplicationController
    def index
      # Retrieve query parameters
    category = params[:category]
    method = params[:method]

    # Fetch questions based on the query parameters
    questions = if category.present? && method.present?
                  Question.where(category: category, method: method)
                else
                  Question.all
                end
      render json: questions
    end
  end