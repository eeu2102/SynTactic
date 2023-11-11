class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: { case_sensitive: false }

  def generate_token
    self.auth_token = SecureRandom.hex # Generates a unique token
    save
  end
end
