class Api::TasksController < ApiController
  def index
    tasks = current_user.tasks.order!(created_at: :desc)
    render json: tasks
  end

  def show
    task = Task.find(params[:id])
    render json: task
  end

end
