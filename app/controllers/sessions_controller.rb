class SessionsController < ApplicationController
  # POST /login
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      user.generate_token # Generate a new token
      render json: { logged_in: true, token: user.auth_token }
    else
      render json: { message: 'Invalid credentials' }, status: :unauthorized
    end
  end

  

  # DELETE /logout
  def destroy
    session[:user_id] = nil
    # Additional logic to handle logout
  end

  def get_current_user
    token = get_token_from_header

    if token
      user = User.find_by(auth_token: token)
      if user
        render json: { username: user.username, language: user.language, progress: user.progress }
      else
        render json: { error: 'Invalid token' }, status: :unauthorized
      end
    else
      render json: { error: 'No token provided' }, status: :unauthorized
    end
  end

  private

  # Extracts the token from the Authorization header
  def get_token_from_header
    if request.headers['Authorization'].present?
      request.headers['Authorization'].split(' ').last
    end
  end

end

