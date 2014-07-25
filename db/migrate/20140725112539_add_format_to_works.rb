class AddFormatToWorks < ActiveRecord::Migration
  def change
    add_column :works, :format, :string
  end
end
