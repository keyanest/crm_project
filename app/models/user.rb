class User < ApplicationRecord
  has_many :tasks
  has_many :contacts
  has_many :logs

  validates_uniqueness_of :email
  validates :first_name, presence: true
  validates :last_name, presence: true
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
