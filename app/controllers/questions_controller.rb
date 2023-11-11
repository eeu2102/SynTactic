# class QuestionsController < ApplicationController
#     def index
#       # Retrieve query parameters
#     category = params[:category]
#     method = params[:method]

#     # Fetch questions based on the query parameters
#     questions = if category.present? && method.present?
#                   Question.where(category: category, method: method)
#                 else
#                   Question.all
#                 end
#       render json: questions
#     end
#   end
# questions_controller.rb
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
