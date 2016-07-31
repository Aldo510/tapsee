Rails.application.routes.draw do
  root 'static_pages#index'
  get '/voz', to: 'static_pages#voz', as: 'voz'
  get '/word', to: 'static_pages#word', as: 'word'
  post '/word', to: 'static_pages#new_word'
  get '/video', to: 'static_pages#video', as: 'video'
  post '/video', to: 'static_pages#new_video'
  get '/morse', to: 'static_pages#morse', as: 'morse'
  post '/morse', to: 'static_pages#new_morse'
  match '/users/:id/finish_signup', to: 'users#finish_signup', via: [:get, :patch], as: :finish_signup

  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' }
end
