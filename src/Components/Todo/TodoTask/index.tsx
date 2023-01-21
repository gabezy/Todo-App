import React, { SetStateAction } from "react";
import { Trash } from "phosphor-react";
import { TaskCard, TaskContent } from "./styles";
import { RadioInput } from "../../RadioInput";

type TodoTasksProps = {
  content: string;
  onDeleteTask: (content: string) => void;
  setTodoCompletedCounter: React.Dispatch<SetStateAction<number>>;
  completed: boolean;
  setTodoTaskCompleted: (content: string) => void;
  setTodoTaskUncompleted: (content: string) => void;
};

export const TodoTask: React.FC<TodoTasksProps> = ({
  content,
  onDeleteTask,
  setTodoCompletedCounter,
  completed,
  setTodoTaskCompleted,
  setTodoTaskUncompleted,
}) => {
  // console.log("completed: ", completed);

  const toggleCompletedTask = () => {
    if (completed) {
      setTodoTaskUncompleted(content);
      setTodoCompletedCounter((prev) => prev - 1);
    } else {
      setTodoCompletedCounter((prev) => prev + 1);
      setTodoTaskCompleted(content);
    }
  };

  const handleDeleteTask = () => {
    onDeleteTask(content);
    if (completed) setTodoCompletedCounter((prev) => prev - 1);
  };

  return (
    <TaskCard>
      <RadioInput
        toggleCompletedTask={toggleCompletedTask}
        isCompleted={completed}
      />
      <TaskContent>
        <p className={completed ? "content checked" : "content"}>{content}</p>
        <button className="deleteButton" onClick={handleDeleteTask}>
          <Trash size={20} />
        </button>
      </TaskContent>
    </TaskCard>
  );
};
