require 'rails_helper'

feature "As an unauthenticated user, I can log in" do
  before { visit root_path }
  let!(:user) { FactoryGirl.create(:user, first_name: "Tim", last_name: "Heidecker", email: "TomPeters@gmail.com", password: "RickWareheimer", password_confirmation: "RickWareheimer") }
  context "User visits the home page" do
    scenario "User sees a page with log in information" do
      expect(page).to have_content("Email")
      expect(page).to have_field("Email")
      expect(page).to have_content("Password")
      expect(page).to have_field("Password")
      expect(page).to have_button("Log in")
      expect(page).to have_link("Forgot your password?")
      expect(page).to have_link("Sign up")
      expect(page).to have_content("Remember me")
    end

    scenario "User successfully logs in" do
      fill_in("Email", with: user.email)
      fill_in("Password", with: user.password)
      check("Remember me")
      click_button("Log in")

      expect(page).to have_content("Hello #{user.first_name}!")
      expect(page).to_not have_content("Email")
      expect(page).to_not have_field("Email")
      expect(page).to_not have_content("Password")
      expect(page).to_not have_field("Password")
      expect(page).to_not have_button("Log in")
      expect(page).to_not have_link("Forgot your password?")
      expect(page).to_not have_content("Remember me")
    end

    scenario "User attempts to log in with a nonexistent account" do
     fill_in("Email", with: "plumbus@gmail.com")
     fill_in("Password", with: "meeseeks")
     check("Remember me")
     click_button("Log in")

     expect(page).to have_content("You must create an account to log in.")
     expect(page).to have_content("Sign up")
     expect(page).to have_content("First name")
     expect(page).to have_field("First name")
     expect(page).to have_content("Last name")
     expect(page).to have_field("Last name")
     expect(page).to have_content("Email")
     expect(page).to have_field("Email")
     expect(page).to have_content("Password")
     expect(page).to have_field("Password")
     expect(page).to have_content("Password confirmation")
     expect(page).to have_field("Password confirmation")
     expect(page).to have_button("Sign up")
     expect(page).to have_link("Log in")
   end

   scenario "User attempts to log in with an incorrect password" do
      fill_in("Email", with: user.email)
      fill_in("Password", with: "RickHeingeber")
      click_button("Log in")

      expect(page).to have_content("Email")
      expect(page).to have_field("Email")
      expect(page.find("#user_email")['value']).to eq(user.email)
      expect(page).to have_content("Password")
      expect(page).to have_field("Password")
      expect(page).to have_button("Log in")
      expect(page).to have_link("Sign up")
      expect(page).to have_link("Forgot your password?")
      expect(page).to have_content("Remember me")
    end
  end
end
