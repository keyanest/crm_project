Rails.application.routes.draw do
  root "users#show"
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  resources :users
  namespace :api do
    resources :users
    resources :contacts do
      resources :logs
    end
    resources :tasks
  end
end
