# frozen_string_literal: true

# config/routes.rb
Rails.application.routes.draw do
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get :documentation, to: 'home#documentation'
  get :icons, to: 'home#icons'
  get :user_profile, to: 'home#user_profile'
  get :typography, to: 'home#typography'
  get :table_list, to: 'home#table_list'
  get :notification, to: 'home#notification'
  get :user_login, to: 'home#user_login'
end
