class Api::StatsController < ApiController

  def index
    stats = current_user.stats
    week = stats.where(:date => 1.week.ago..Time.now)
    month = stats.where(:date => 4.week.ago..Time.now)
    render json: { week: week, month: month }
  end

  def create
    stat = Stat.new(stat_params)
    stat.date = Date.today
    stat.user = current_user
    if stat.save
      render json: stat
    end
  end

  private

  def stat_params
    params.require(:stat).permit(:calls_made, :contacts_made, :opportunities, :deals_won, :deals_lost)
  end
end
