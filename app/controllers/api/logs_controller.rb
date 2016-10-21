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

  def create
    log = Log.new(log_params)
    log.log_date = Date.today
    log.user = current_user
    log.contact = Contact.find_by(id: params[:contact_id])
    if log.save
      render json: log, status: :ok
    else
      fullerror = "Please complete form correctly."
      render json: fullerror
    end
  end

  def destroy
    log = Log.find(params[:id])
    log.destroy
    logs = current_user.logs
    render json: logs
  end

  private

  def log_params
    params.require(:log).permit(:name, :notes)
  end

end
