require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
  let!(:user) { User.create(username: 'testuser', password: 'password', language: 'Python', progress: '0') }

describe 'POST #create' do
    context 'with valid credentials' do
      it 'logs in the user' do
        post :create, params: { username: user.username, password: 'password' }
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)['logged_in']).to be true
        expect(JSON.parse(response.body)).to have_key('token')
      end
    end

    context 'with invalid credentials' do
      it 'does not log in the user' do
        post :create, params: { username: user.username, password: 'wrongpassword' }
        expect(response).to have_http_status(:unauthorized)
        expect(JSON.parse(response.body)['message']).to eq('Invalid credentials')
      end
    end
end

describe 'DELETE #destroy' do
  it 'logs out the user' do
    delete :destroy
    expect(session[:user_id]).to be_nil
  end
end

describe 'GET #get_current_user' do
    context 'with valid token' do
        it 'returns the current user details' do
          test_user = User.create(username: 'newuser', password: 'newpassword', language: 'Java', progress: '0')

          # Simulate the login to generate the token
          post :create, params: { username: test_user.username, password: 'newpassword' }
          token = JSON.parse(response.body)['token']

          # Use the generated token to make the request
          request.headers['Authorization'] = "Bearer #{token}"
          get :get_current_user

          expect(response).to have_http_status(:ok)
          parsed_response = JSON.parse(response.body)
          expect(parsed_response['username']).to eq(test_user.username)
          expect(parsed_response['language']).to eq(test_user.language)
          expect(parsed_response['progress']).to eq(test_user.progress)
        end
    end

    context 'with invalid token' do
      it 'returns an unauthorized error' do
        request.headers['Authorization'] = "Bearer invalidtoken"
        get :get_current_user
        expect(response).to have_http_status(:unauthorized)
        expect(JSON.parse(response.body)['error']).to eq('Invalid token')
      end
    end

    context 'without token' do
      it 'returns an unauthorized error' do
        get :get_current_user
        expect(response).to have_http_status(:unauthorized)
        expect(JSON.parse(response.body)['error']).to eq('No token provided')
      end
    end
  end
end