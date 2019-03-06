class TeamsController < ApplicationController

  def show
    render json:Team.find(params[:id])
  end

  def create
    render json:Team.create(team_params)
  end

  def update
      Team.find(params[:id]).update(team_params)
      render json: Team.find(params[:id])
   end
   
private

def team_params
  params.permit(:name, user_ids: [])
end

end
