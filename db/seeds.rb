# About - 10/30/2023
# This file parses the csv containing problem data, assigning them into local variables


# frozen_string_literal: true

require 'csv'

csv_text = File.read(Rails.root.join('db', 'allquestions.csv'))
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
