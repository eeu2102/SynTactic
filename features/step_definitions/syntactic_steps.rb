require 'uri'
require 'cgi'
require File.expand_path(File.join(File.dirname(__FILE__), "..", "support", "paths"))
require File.expand_path(File.join(File.dirname(__FILE__), "..", "support", "selectors"))


Given /the following questions exist/ do |questions_table|
    questions_table.hashes.each do |question|
      Question.create question
    #   puts question
    end
end

Given /^(?:|I )am on (.+)$/ do |page_name|
    visit path_to(page_name)
    # puts page.body
end

When /^I press the "(.*)" button/ do |button|
    click_button button
    #puts page.body
end

Then /^(?:|I )should be on (.+)$/ do |page_name|
    # puts page.body
    current_path = URI.parse(current_url).path.chomp('/')
    expect(current_path).to eq(path_to(page_name).chomp('/'))
end

And /^(?:|I )do not see "([^"]*)"$/ do |text|
    expect(page).to have_no_content(text)
  end

When /^(?:|I )fill in "([^"]*)" with "([^"]*)"$/ do |field, value|
    fill_in(field, :with => value)
end
  
