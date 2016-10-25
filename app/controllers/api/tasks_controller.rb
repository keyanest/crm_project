class Api::TasksController < ApiController

  def index
    tasks = []
    arr = current_user.tasks.order!(created_at: :desc)
    arr.each do |t|
      if t.completed == false
        tasks << t
      end
    end
    render json: tasks
  end

  def show
    task = Task.find(params[:id])
    contact = task.contact
    render json: { task: task, contact: contact}
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
    if task_params[:send_email] == true
      UserMailer.reminder_email(current_user, task, task.contact.name).deliver
    end
    if task.save
      render json: task
    else
      fullerror = "Please complete form correctly."
      render json: fullerror
    end
  end

  def update
    task = Task.find(params[:id])
    task.update_attributes(task_params)
    render json: task, status: :ok
  end

  def destroy
    task = Task.find(params[:id])
    tasks = current_user.tasks
    task.destroy
    render json: tasks
  end

  private

  def task_params
    params.require(:task).permit(:name, :body, :due_date, :contact, :send_email, :completed)
  end
end
