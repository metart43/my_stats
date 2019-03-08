Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, except: [:destroy], param: :name
  resources :matches, only: [:create, :destroy, :update]
  resources :heros, only: [:show, :index]
  resources :teams, only: [:show, :create, :update]
end
