Rails.application.routes.draw do
  root "users#show"
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  resources :users
end
