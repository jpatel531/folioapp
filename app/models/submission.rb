class Submission < ActiveRecord::Base
  belongs_to :opportunity
  belongs_to :organisation
  belongs_to :user
  has_one :work

  accepts_nested_attributes_for :work

  validates :work, presence: true

  def sender=(user)
  	user
  end

  def recipient=(organisation)
  	organisation
  end

  def sender
  end

  def recipient
  end

end
