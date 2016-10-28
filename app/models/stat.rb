class Stat < ApplicationRecord
  belongs_to :user

  validates :date, presence: true
  validates :calls_made, presence: true
  validates :contacts_made, presence: true
  validates :opportunities, presence: true
  validates :deals_won, presence: true
  validates :deals_lost, presence: true
end
