class UserMailer < ApplicationMailer
  default from: 'practice.email1988@gmail.com'

  def welcome_email(user, task, contact)
    @user = user
    @task = task
    @contact = contact
    mail(to: @user.email, subject: 'Task Reminder')
  end
end
