require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe 'POST #create' do
    context 'with valid user parameters' do
      it 'creates a new user and generates a token' do
        post :create, params: { user: { username: 'newuser', password: 'password123' } }
        expect(response).to have_http_status(:created)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response).to include('id', 'username', 'token', 'progress')
        expect(parsed_response['username']).to eq('newuser')
      end
    end

    context 'with invalid user parameters' do
      it 'does not create a user and returns errors' do
        post :create, params: { user: { username: '', password: 'password123' } }
        expect(response).to have_http_status(:unprocessable_entity)
        expect(JSON.parse(response.body)).to have_key('errors')
      end
    end
  end

  describe 'PATCH #update_language' do
    let(:user) { User.create(username: 'testuser', password: 'password', language: 'Python') }

    context 'with valid token and language parameter' do
      it 'updates the user language' do
        user.generate_token
        request.headers['Authorization'] = "Bearer #{user.auth_token}"
        patch :update_language, params: { language: 'Java' }
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)['message']).to eq('Language updated successfully')
      end
    end
  end

  describe 'PATCH #update_progress' do
    let(:user) { User.create(username: 'testuser', password: 'password', progress: 10) }

    context 'with valid token and progress parameter' do
      it 'updates the user progress' do
        user.generate_token
        request.headers['Authorization'] = "Bearer #{user.auth_token}"
        patch :update_progress, params: { score: '5' }
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)['message']).to eq('Progress updated successfully')
        user.reload
        expect(user.progress).to eq(15)
      end
    end
  end
end