Rails.application.routes.draw do
  root to: 'tasks#index'
  resources :users
  resources :tasks

  namespace :api do
    namespace :v1 do
      resources :tasks
    end
  end
end
