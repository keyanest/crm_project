class Task < ApplicationRecord
  belongs_to :user
  belongs_to :contact

  validates :name, presence: true
  validates :body, presence: true
  validates :assign_date, presence: true
  validates :due_date, presence: true
end
