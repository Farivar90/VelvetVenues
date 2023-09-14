class CreateForumPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :forum_posts do |t|
      t.text :content
      t.references :user, null: false, foreign_key: true
      t.references :forum_thread, null: false, foreign_key: true

      t.timestamps
    end
  end
end
