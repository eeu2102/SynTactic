class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      @user.generate_token # Generate a new token
      render json: { id: @user.id, username: @user.username, token: @user.auth_token }, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end


def update_language
  token = request.headers['Authorization'].split(' ').last
  user = User.find_by(auth_token: token)

  if user.update(language: params[:language])
    render json: { message: 'Language updated successfully' }, status: :ok
  else
    render json: { error: 'Failed to update language' }, status: :unprocessable_entity
  end
end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
