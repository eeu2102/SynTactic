# class UsersController < ApplicationController
#   def new
#     @user = User.new
#   end

#   def create
#     @user = User.new(user_params)
#     if @user.save
#       # Handle a successful save, such as logging in the user, and redirecting to a profile page or dashboard.
#     else
#       # Re-render the 'new' form with error messages.
#     end
#   end

#   private

#   def user_params
#     params.require(:user).permit(:username, :password, :email) # Add other fields as needed.
#   end
# end

class UsersController < ApplicationController
  # Skip before_action if you have set any that are not required for API requests

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
