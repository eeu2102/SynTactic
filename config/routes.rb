# frozen_string_literal: true

Rails.application.routes.draw do
  resources :questions, only: [:index]
  root to: redirect('/home')

  get 'home', to: 'site#index'
  get 'home/new', to: 'site#index'
  get 'home/:id', to: 'site#index'
  get 'home/:id/edit', to: 'site#index'

  namespace :api do
    resources :events, only: %i[index show create destroy update]
  end
end
