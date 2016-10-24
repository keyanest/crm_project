class RemoveLogColumnFromTasks < ActiveRecord::Migration[5.0]
  def change
    remove_column :tasks, :log_id
  end
end
