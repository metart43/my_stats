class UsersController < ApplicationController
  def show
    render json:User.find_by_name(params[:name])
  end

  def create
    render json:User.create(user_params)
  end

  def index
    render json:User.all
  end

  private
  def user_params
    params.require(:user).permit(:name)
  end
end
