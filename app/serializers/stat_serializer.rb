class ContactSerializer < ActiveModel::Serializer
  attributes :id, :date, :calls_made, :contacts_made, :opportunities, :deals_won, :deals_lost, :user_id
end
