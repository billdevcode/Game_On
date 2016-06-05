Rails.application.routes.draw do
  root 'sessions#new'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  resources :players, only: [:new,:create, :show, :edit, :update] do
    resources :teams, except: [:delete] do
      get 'rsvp' => 'rsvp#show'
      post 'rsvp' => 'rsvp#create'
      patch 'rsvp' => 'rsvp#update'
      resources :games, only: [:index, :show, :new, :create, :update]
    end
  end
end