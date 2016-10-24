class Api::TasksController < ApiController
  def index
    tasks = current_user.tasks.order!(created_at: :desc)
    render json: tasks
  end

  def show
    task = Task.find(params[:id])
    render json: task
  end

  def create
    binding.pry
    task = Task.new(task_params)
    task.assign_date = Date.today
    task.user = current_user


  end

  private

  def task_params
    params.require(:task).permit(:name, :body, :due_date)
  end
end
