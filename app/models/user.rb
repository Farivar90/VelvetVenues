class User < ApplicationRecord
  has_secure_password

  validates :username, 
    uniqueness: true, 
    length: { in: 1..30 }
  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true
  validates :full_name, length: { in: 1..255 }, allow_nil: true
  
  before_validation :ensure_session_token

  has_one_attached :photo

  has_many :favorites,
    dependent: :destroy

  has_many :questions,
    dependent: :destroy

  has_many :sent_messages, class_name: "Message", foreign_key: "sender_id",
    dependent: :destroy
  
  has_many :received_messages, class_name: "Message", foreign_key: "receiver_id",
    dependent: :destroy


  def self.find_by_credentials(credential, password)
    field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
    user = User.find_by(field => credential)
    user&.authenticate(password)
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  private

  def generate_unique_session_token
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

end
