class ContactSerializer < ActiveModel::Serializer
  attributes :id, :name, :last_name, :phone_number, :email, :company, :position, :department, :last_contact, :user_id
end
