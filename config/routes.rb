Rails.application.routes.draw do

  devise_for :users, :controllers => { 
  	:omniauth_callbacks => "users/omniauth_callbacks" 
  }

	resources :users do
		resources :collections do 
			resources :works
		end
	end
	
  root :to => "home#index"

end
