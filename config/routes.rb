Rails.application.routes.draw do
  root "users#show"
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  resources :users
  namespace :api do
    resources :contacts do
      resources :logs
    end
    resources :tasks
    resources :users
    resources :stats
  end
end
