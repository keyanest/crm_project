class Api::StatsController < ApiController

  def create
    stat = Stat.new(stat_params)
    stat.date = Date.today
    stat.user = current_user
    if stat.save
      render json: stat
    end
  end

  private

  params.require(:stat).permit(:calls_made, :contacts_made, :meetings_set, :deals_won, :deals_lost)
end
