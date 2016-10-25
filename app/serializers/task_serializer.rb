class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :body, :assign_date, :due_date, :contact_id, :user_id, :completed
end
