class CreateEmojis < ActiveRecord::Migration[6.0]
  def change
    create_table :emojis do |t|
      t.string :slug
      t.string :character
      t.boolean :is_food?
      t.timestamps
    end
  end
end
