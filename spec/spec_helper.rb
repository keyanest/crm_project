Dir[__dir__ + '/support/*.rb'].each { |file| require_relative file }

require 'devise'
require 'coveralls'
require 'capybara'
require 'capybara-webkit'
require 'capybara/rspec'

Coveralls.wear!('rails')

Capybara.javascript_driver = :webkit
Capybara.default_host = 'http://localhost:3000'

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups
end
