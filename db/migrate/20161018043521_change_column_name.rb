class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :logs, :date, :log_date
  end
end
