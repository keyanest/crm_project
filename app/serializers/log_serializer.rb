class LogSerializer < ActiveModel::Serializer
  attributes :id, :name, :log_date, :notes, :user_id, :contact_id
end
