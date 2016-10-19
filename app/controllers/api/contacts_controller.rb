class Api::ContactsController < ApiController
  def index
    contacts = Contact.all
    render json: { contacts: contacts }, status: :ok
  end

  def create
    binding.pry
    contact = Contact.new(contact_params)
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

  def contact
    params.require(:contact).permit(:name, :last_name, :phone_number, :email, :company, :position, :deparment, :last_contact)
  end
end
