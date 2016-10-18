Rails.application.routes.draw do
  root "users#home"
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  resources :users
end
