class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.text :question
      t.text :choice_a
      t.text :choice_b
      t.text :choice_c
      t.text :answer
      t.string :coding_language
      t.string :category

      t.timestamps
    end
  end
end
