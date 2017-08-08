class ItemsController < ApplicationController
  def create
    @user = User.find(current_user.id)
    @item = Item.new
    @item.name = params[:item][:name]
    @item.user_id = @user.id

    if @item.save
      flash[:success] = "Item was saved."
      redirect_to user_path(@user.id)
    else
      flash[:alert] = "There was an error saving the item. Please try again."
      redirect_to user_path(@user.id)
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    @item = Item.find(params[:id])

    if @item.destroy
      flash[:success] = "Great job! You completed: #{@item.name}"
      redirect_to user_path(@user.id)
    else
      flash[:alert] = "There was an error. Please try again."
      redirect_to user_path(@user.id)
    end
  end
end
