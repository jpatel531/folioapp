class Work < ActiveRecord::Base
  belongs_to :user
  has_and_belongs_to_many :media
  has_and_belongs_to_many :genres

end
