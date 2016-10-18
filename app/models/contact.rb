class Contact < ApplicationRecord
  belongs_to :user
  has_many :logs
  has_many :tasks

  validates_uniqueness_of :phone_number
  validates_uniqueness_of :email
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :company, presence: true
end
