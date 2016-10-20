class Api::ContactsController < ApiController
  def index
    contacts = current_user.contacts
    render json: contacts
  end

  def show
    contact = Contact.find(params[:id])
    logs = contact.logs
    render json: { contact: contact, logs: logs }

  end


  private

  def contact_params
    params.require(:contact).permit(:name, :last_name, :phone_number, :email, :company, :position, :department, :last_contact, :user_id)
  end
end
