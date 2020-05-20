class Api::V1::TasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    render json: Task.all
    # render json: @tasks
  end

  def show
    render json: @task
  end

  def new
    @task = Task.new
  end

  def edit
  end

  def create
    task = Task.create(task_params)
    render json: task
  end

  def update
    @task.update!(task_params)
    render json: @task
  end

  def destroy
    binding.pry
    if @task.destroy
      head :no_content, status: :ok
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  private

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:name, :description)
  end
end
