Rails.application.routes.draw do

  devise_for :users, :controllers => { 
  	:omniauth_callbacks => "users/omniauth_callbacks" 
  }

	resources :users do
		resources :collections do 
			resources :works
		end
	end
	
  resources :organisations do 
    resources :opportunities do
      resource :submission
    end
  end

  root :to => "home#index"

  scope '/api' do
    get '/s3' => 's3#index'
  end

end
