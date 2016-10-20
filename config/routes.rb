Rails.application.routes.draw do
  root "users#show"
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  resources :users
  namespace :api do
    resources :contacts, only: [:index, :show, :create, :destroy] do
      resources :logs, only: [:index, :show, :create, :destroy]
    end
    resources :tasks, only: [:index, :show, :create, :destroy]
  end
end
