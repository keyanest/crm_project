class Api::ContactsController < ApiController
  def index
    contacts = Contact.all
    render json: contacts
  end

  def show
    contact = Contact.find(params[:id])
    render json: contact, contact.log
  end

  def create
    contact = Contact.new(contact_params)
    contact.user_id = current_user
    if contact.save
      render json: { contact: contact }, status: :created
    else
      render json: { errors: contact.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    contact = Contact.find(params[:id])
    contact.destroy
    head :no_content
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :last_name, :phone_number, :email, :company, :position, :department, :last_contact, :user_id)
  end
end
