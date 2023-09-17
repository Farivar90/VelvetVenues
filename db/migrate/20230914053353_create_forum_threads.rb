class CreateForumThreads < ActiveRecord::Migration[7.0]
  def change
    create_table :forum_threads do |t|
      t.string :title
      t.references :user, null: false, foreign_key: true
      t.references :forum_category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
