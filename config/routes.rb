Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :show, :destroy]
    resources :users
    # get '/users/current', to: 'users#current'
  end

  get '*path',
   to: 'static_pages#frontend',
   constraints: lambda { |req| !req.xhr? && req.format.html? }

  root to: 'static_pages#frontend'

end
