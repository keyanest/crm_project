class Api::ContactsController < ApiController

  def index
    contacts = current_user.contacts
    render json: contacts
  end

  def show
    contact = Contact.find(params[:id])
    logs = contact.logs
    tasks = contact.tasks
    render json: { contact: contact, logs: logs, tasks: tasks }
  end

  def create
    contact = Contact.new(contact_params)
    contact.user = current_user
    if contact.save
      render json: contact, status: :ok
    else
      fullerror = "Please complete form correctly."
      render json: fullerror
    end
  end

  def edit
    contact = Contact.find(params[:id])
    render json: contact, status: :ok
  end

  def update
    contact = Contact.find(params[:id])
    if contact.update_attributes(contact_params)
      render json: contact, status: :ok
    else
      fullerror = "Please complete form correctly."
      render json: fullerror
    end
  end

  def destroy
    contact = Contact.find(params[:id])
    contacts = current_user.contacts
    contact.destroy
    render  json: contacts
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :last_name, :phone_number, :email, :company, :position, :department, :last_contact)
  end
end
