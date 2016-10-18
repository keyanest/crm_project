require 'rails_helper'

RSpec.describe Contact, type: :model do
  it "is valid with valid attributes" do
    user = FactoryGirl.create(:user)
    contact = FactoryGirl.create(:contact, user_id: 1)
    should validate_uniqueness_of(:email)
    should validate_uniqueness_of(:phone_number)
    expect(contact).to be_valid
  end
  it "is not valid without a name" do
    contact = FactoryGirl.build(:contact, name: nil)
    expect(contact).to_not be_valid
  end
  it "is not valid without a last name" do
    contact = FactoryGirl.build(:contact, last_name: nil)
    expect(contact).to_not be_valid
  end
  it "is not valid without a company" do
    contact = FactoryGirl.build(:contact, company: nil)
    expect(contact).to_not be_valid
  end
end
