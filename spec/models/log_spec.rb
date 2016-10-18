require 'rails_helper'

RSpec.describe Log, type: :model do
  it "is valid with valid attributes" do
    user = FactoryGirl.create(:user)
    contact = FactoryGirl.create(:contact, user_id: 1)
    log = FactoryGirl.create(:log, user_id: 1, contact_id: 1)
    expect(log).to be_valid
  end
  it "is not valid without a title" do
    log = FactoryGirl.build(:log, title: nil)
    expect(log).to_not be_valid
  end
  it "is not valid without a log_date" do
    log = FactoryGirl.build(:log, log_date: nil)
    expect(log).to_not be_valid
  end
  it "is not valid without notes" do
    log = FactoryGirl.build(:log, notes: nil)
    expect(log).to_not be_valid
  end
end
