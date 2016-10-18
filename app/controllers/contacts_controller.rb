class ContactsController < ApplicationController
  belongs_to :user
  has_many :tasks
  has_many :logs
end
