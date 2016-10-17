require 'factory_girl_rails'

FactoryGirl.define do
  factory :user do
    sequence(:first_name) { |n| "jar#{n}" }
    sequence(:last_name) { |n| "lax#{n}" }
    sequence(:email) { |n| "jarlax#{n}@launchacademy.com" }
    password "abcdef1234"
    password_confirmation "abcdef1234"
    factory :admin do
      admin true
    end
  end
end
