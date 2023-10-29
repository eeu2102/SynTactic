# frozen_string_literal: true

require 'csv'

csv_text = File.read(Rails.root.join('db', 'new_questions.csv'))
csv = CSV.parse(csv_text, headers: true, encoding: 'UTF-8')
csv.each do |row|
  Question.create!(
    question: row['question'],
    choice_a: row['choice_a'],
    choice_b: row['choice_b'],
    choice_c: row['choice_c'],
    answer: row['answer'],
    coding_language: row['coding_language'],
    category: row['category'],
    method: row['method']
  )
end

puts "Imported #{csv.count} questions"


json = ActiveSupport::JSON.decode(File.read('db/seeds/events.json'))
json.each do |record|
  Event.create!(record)
end
