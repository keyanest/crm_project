class Contact < ApplicationRecord
  belongs_to :user

  validates :date, presence: true
  validates :calls_made, presence: true
  validates :contacts_made, presence: true
  validates :meetings_set, presence: true
  validates :deals_won, presence: true
  validates :deals_lost, presence: true
end
