require 'uri'
require 'cgi'
require File.expand_path(File.join(File.dirname(__FILE__), "..", "support", "paths"))
require File.expand_path(File.join(File.dirname(__FILE__), "..", "support", "selectors"))


Given /^(?:|I )am on (.+)$/ do |page_name|
    visit path_to(page_name)
end

When /^I press the "(.*)" button/ do |button|
    click_button button
end

Then /^(?:|I )should be on (.+)$/ do |page_name|
    current_path = URI.parse(current_url).path
    expect(current_path).to eq(path_to(page_name))
  end

  
