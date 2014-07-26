Rails.application.routes.draw do

  devise_for :users, :controllers => { 
  	:omniauth_callbacks => "users/omniauth_callbacks" 
  }

	resources :users do
		resources :works
	end
	
  root :to => "home#index"

  scope '/api' do
    get '/s3' => 's3#index'
  end

end
