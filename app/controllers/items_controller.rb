class ItemsController < ApplicationController
  def create
    @item = Item.new
    @item.name = params[:item][:name]
    @item.user_id = current_user.id

    @item.save
    redirect_to user_path(current_user.id)

  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy

    respond_to do |format|
      format.html
      format.js
    end
  end
end
