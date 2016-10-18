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

    factory :contact do
      sequence(:first_name) { |n| "lar#{n}" }
      sequence(:last_name) { |n| "jax#{n}" }
      sequence(:phone_number) { |n| "555-555#{n}"}
      sequence(:email) { |n| "larjax#{n}@launchacademy.com" }
      sequence(:company) { |n| "#{n} inc."}
  end

  factory :log do
    sequence(:title) { |n| "Called Mr.#{n}" }
    log_date Date.new(2012, 3, 6)
    sequence(:notes) { |n| "Discussed opportunity.#{n}" }
  end

  factory :task do
    sequence(:title) { |n| "Call Mr.#{n}" }
    sequence(:body) { |n| "Discuss opportunity.#{n}" }
    assign_date Date.new(2012, 3, 6)
    due_date Date.new(2012, 4, 6)
  end
end
