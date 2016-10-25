class Api::UsersController < ApiController

  def index
    user = current_user
    render json: user
  end
end
