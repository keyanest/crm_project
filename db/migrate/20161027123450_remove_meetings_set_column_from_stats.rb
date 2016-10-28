class RemoveMeetingsSetColumnFromStats < ActiveRecord::Migration[5.0]
  def change
    remove_column :stats, :meetings_set
  end
end
