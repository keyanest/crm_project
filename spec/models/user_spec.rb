require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with valid attributes" do
    user = FactoryGirl.create(:user)
    expect(user).to be_valid
  end
  it "is not valid without a first name" do
    user = FactoryGirl.build(:user, first_name: nil)
    expect(user).to_not be_valid
  end
  it "is not valid without a last name" do
    user = FactoryGirl.build(:user, last_name: nil)
    expect(user).to_not be_valid
  end
  it { should validate_uniqueness_of(:email) }
end
