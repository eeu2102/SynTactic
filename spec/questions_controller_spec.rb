require 'rails_helper'

RSpec.describe QuestionsController, type: :controller do
  describe 'GET #index' do
    let!(:question1) do
      Question.create(question: 'Answer is B', choice_a: 'incorrect', choice_b: 'correct', choice_c: 'choice 3', answer: 'B', coding_language: 'Python', category: 'control flow', method: 'multiple choice')
    end

    let!(:question2) do
      Question.create(question: 'Answer is A', choice_a: 'correct', choice_b: 'incorrect', choice_c: 'choice 3', answer: 'A', coding_language: 'Python', category: 'control flow', method: 'multiple choice')
    end

    context 'when no parameters are provided' do
      it 'returns all questions' do
        get :index
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body).size).to eq(2)
        expect(JSON.parse(response.body).map { |q| q['id'] }).to include(question1.id, question2.id)
      end
    end
    
    context 'when both category and method parameters are provided' do
      it 'returns questions that match both category and method' do
        get :index, params: { category: 'control flow', method: 'multiple choice' }
        expect(response).to have_http_status(:ok)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response.size).to eq(2)
        expect(parsed_response.map { |q| q['id'] }).to include(question1.id, question2.id)
      end
    end
  end
end







