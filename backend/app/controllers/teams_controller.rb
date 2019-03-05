class TeamsController < ApplicationController

  def show
    render json:Team.find(params[:id])
  end

end
