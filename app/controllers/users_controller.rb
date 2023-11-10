class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # Handle a successful save, such as logging in the user, and redirecting to a profile page or dashboard.
    else
      # Re-render the 'new' form with error messages.
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email) # Add other fields as needed.
  end
end
