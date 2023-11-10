class SessionsController < ApplicationController
  # POST /login
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      # If you're using cookie-based sessions:
      session[:user_id] = user.id
      render json: { logged_in: true, user: user }
    else
      render json: { message: 'Invalid credentials' }, status: :unauthorized
    end
  end

  # DELETE /logout
  def destroy
    session[:user_id] = nil
    # Additional logic to handle logout
  end

  # def destroy
  #   session.delete(:user_id)
  #   # Or if you're using a token in the session:
  #   # reset_session
  #   head :no_content
  # end
end
