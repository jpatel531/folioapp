Rails.application.routes.draw do

  devise_for :users
  resources :users
  root :to => "home#index"

  scope '/api' do
    get '/s3' => 's3#index'
  end

end
