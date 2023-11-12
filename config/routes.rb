# frozen_string_literal: true

Rails.application.routes.draw do
    # should we namespace api our routes?

  resources :questions, only: [:index]

  resources :users, only: [:index, :create]

  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  get '/current_user', to: 'sessions#get_current_user'
  post '/update_language', to: 'users#update_language'
  post '/update_progress', to: 'users#update_progress'

  # root to: redirect('/home')
  root to: redirect('/login')


  get 'home', to: 'site#index'
  get 'home/new', to: 'site#index'
  get 'home/:id', to: 'site#index'
  get 'home/:id/edit', to: 'site#index'

  # namespace :api do
  #   resources :events, only: %i[index show create destroy update]
  # end

  get '*path', to: 'site#index'
end
