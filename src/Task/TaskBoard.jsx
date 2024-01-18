import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTasksFound from "./NoTasksFound";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      " I want to learn react such that I can treat it like slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }
    setShowModal(false);
  };

  const handleOnEdit = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };

  const handleSingleTaskDelete = (TaskId) => {
    const remainingTasks = tasks.filter((task) => task.id !== TaskId);
    setTasks(remainingTasks);
  };

  const handleDeleteAll = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFavorite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  };

  const handleSearch = (searchTerm) => {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks([...filtered]);
  };

  return (
    <div>
      <section className="mb-20" id="tasks">
        {showModal && (
          <AddTaskModal
            onSave={handleAddEditTask}
            taskToUpdate={taskToUpdate}
            handleCloseModal={handleCloseModal}
          />
        )}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask onSearch={handleSearch} />
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              onAddTask={() => setShowModal(true)}
              onDeleteAll={handleDeleteAll}
            />
            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onEdit={handleOnEdit}
                handleSingleTaskDelete={handleSingleTaskDelete}
                onFav={handleFavorite}
              />
            ) : (
              <NoTasksFound />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
