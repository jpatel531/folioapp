class Collection < ActiveRecord::Base
  belongs_to :user
  has_many :works

  # def to_param
  # 	"#{id}-#{title.parameterize}"
  # end

end
