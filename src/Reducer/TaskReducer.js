export function TaskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((pTask) => {
        if (pTask.id === action.task.id) {
          return action.task;
        } else {
          return pTask;
        }
      });
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default :{
        return Error("didn't match any")
    }
  }
}
