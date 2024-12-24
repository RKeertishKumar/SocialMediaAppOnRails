Rails.application.routes.draw do
  resources :posts
  get 'notifications', to: 'notifications#index'
end
