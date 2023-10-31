require 'uri'
require 'cgi'
require File.expand_path(File.join(File.dirname(__FILE__), "..", "support", "paths"))
require File.expand_path(File.join(File.dirname(__FILE__), "..", "support", "selectors"))


Given /^(?:|I )am on (.+)$/ do |page_name|
    visit path_to(page_name)
end

When /^I press "(.*)" button/ do |button|
    click_button button
end