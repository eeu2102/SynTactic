class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      # Handle a successful save
      session[:user_id] = @user.id # If you're using session-based authentication
      render json: { id: @user.id, username: @user.username }, status: :created
      # Or return a token if you're using token-based authentication
    else
      # Render error messages in JSON format
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
