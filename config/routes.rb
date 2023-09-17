Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :show, :destroy]
    resources :users
    resources :messages
    resources :listings
    resources :amenities, only: [:index]
    resources :favorites, only: [:create, :destroy, :index, :show]

    resources :forum_categories do
      resources :forum_threads, only: [:index, :create, :show, :update, :destroy] do
        resources :forum_posts, only: [:index, :create, :show, :update, :destroy]do
        resources :votes, only: [:show, :create, :destroy]
        end
      end
    end
  
  end

  get '*path',
   to: 'static_pages#frontend',
   constraints: lambda { |req| !req.xhr? && req.format.html? }

  root to: 'static_pages#frontend'

end
