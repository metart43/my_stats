Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, except: [:destroy, :index]
  resources :matches, only: [:create, :destroy, :update]
  resources :heros, only: [:show]
  resources :teams, only: [:show, :create, :update]
end
