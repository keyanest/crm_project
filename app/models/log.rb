class Log < ApplicationRecord
  belongs_to :user
  belongs_to :contact

  validates :name, presence: true
  validates :log_date, presence: true
  validates :notes, presence: true
end
