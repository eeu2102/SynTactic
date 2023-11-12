class QuestionsController < ApplicationController
  def index
    category = params[:category]
    method = params[:method]
    coding_language = params[:coding_language]

    questions = if category.present? && method.present?
                  Question.where(category: category, method: method, coding_language: coding_language)
                else
                  Question.all
                end
    render json: questions
  end
end
