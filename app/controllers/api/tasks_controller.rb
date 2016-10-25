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
    contacts = current_user.contacts
    contact = task_params[:contact].split(" ")
    contact_id = nil
    contacts.each do |c|
      if c.name == contact[0] && c.last_name == contact[1]
        contact_id = c.id
      end
    end
    task = Task.new(name: task_params[:name], body: task_params[:body], due_date: task_params[:due_date], contact_id: contact_id )
    task.assign_date = Date.today
    task.user = current_user
  end

  private

  def task_params
    params.require(:task).permit(:name, :body, :due_date, :contact, :send_email)
  end
end
