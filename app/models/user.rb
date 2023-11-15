class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: { case_sensitive: false }
  validates :progress, numericality: { greater_than_or_equal_to: 0 }

  def generate_token
    self.auth_token = SecureRandom.hex # Generates a unique token
    save
  end
end
