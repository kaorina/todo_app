class TasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    @tasks = Task.all
    render component: 'TodoList', props: { todos: @tasks}, tag: 'span', class: 'todo'
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
    task = Task.new(task_params)
    task.save!
    #redirect_to tasks_url, notice: "タスク「#{task.name}」を作成しました"
    render json: task
  end

  def update
    @task.update!(task_params)
    #redirect_to tasks_url, notice: "タスク「#{@task.name}」を更新しました"
    render json: @task
  end

  def destroy
    if @task.destroy
      head :no_content, status: :ok
      #redirect_to tasks_url, notice: "タスク「#{@task.name}」を削除しました"
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
