require 'rails_helper'

RSpec.describe Task, type: :model do
  it "is valid with valid attributes" do
    user = FactoryGirl.create(:user)
    contact = FactoryGirl.create(:contact, user_id: 1)
    log = FactoryGirl.create(:log, user_id: 1, contact_id: 1)
    task = FactoryGirl.create(:task, user_id: 1, contact_id: 1, log_id: 1)
    expect(task).to be_valid
  end
  it "is not valid without a title" do
    task = FactoryGirl.build(:task, title: nil)
    expect(task).to_not be_valid
  end
  it "is not valid without a body" do
    task = FactoryGirl.build(:task, body: nil)
    expect(task).to_not be_valid
  end
  it "is not valid without an assign date" do
    task = FactoryGirl.build(:task, assign_date: nil)
    expect(task).to_not be_valid
  end
  it "is not valid without an due date" do
    task = FactoryGirl.build(:task, due_date: nil)
    expect(task).to_not be_valid
  end
end
