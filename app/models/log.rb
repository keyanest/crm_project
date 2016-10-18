class Log < ApplicationRecord
  belongs_to :user
  belongs_to :contact
  has_many :tasks

  validates :title, presence: true
  validates :log_date, presence: true
  validates :notes, presence: true
end
