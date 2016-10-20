class Api::LogsController < ApiController

  def index
    binding.pry
    logs = Log.where(contact_id: params[:id])
    render json: logs
  end

  def show
    log = Log.find(params[:id])
    render json: log
  end

end
