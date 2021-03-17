class AddDateToAppointment < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :date, :float
  end
end
