class MatchesController < ApplicationController
  def create
    render json:Match.create(match_params)
  end

  private
  def match_params
    params.require(:match).permit(:user_id, :hero_id, :kills, :deaths, :assists, :result)
  end
end
