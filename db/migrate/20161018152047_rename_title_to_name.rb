class RenameTitleToName < ActiveRecord::Migration[5.0]
  def change
    rename_column :logs, :title, :name
    rename_column :tasks, :title, :name
    rename_column :contacts, :first_name, :name
  end
end
