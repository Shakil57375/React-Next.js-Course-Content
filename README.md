# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


    const updatedTask = tasks.map((pTask) => {
      if (pTask.id === task.id) {
        return task;
      } else {
        return pTask;
      }
    });
    setTasks(updatedTask);

    setTasks(tasks.filter((task) => task.id !== Taskid));