class UserMailer < ApplicationMailer
  default from: 'practice.email1988@gmail.com'

  def reminder_email(user, task, contact_name)
    @user = user
    @task = task
    @contact_name = contact_name
    mail(to: @user.email, subject: 'Task Reminder')
  end
end
