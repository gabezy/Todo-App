import React, { SetStateAction } from "react";
import { Trash } from "phosphor-react";
import { TaskCard, TaskContent } from "../../styles/styles";
import { dark } from "../../styles/Variables";
import { RadioInput } from "../RadioInput";

type TodoTasksProps = {
  content: string;
  onDeleteTask: (content: string) => void;
  setTodoCompletedCounter: React.Dispatch<SetStateAction<number>>;
};

export const TodoTask: React.FC<TodoTasksProps> = ({
  content,
  onDeleteTask,
  setTodoCompletedCounter,
}) => {
  const [isCompleted, setIsCompleted] = React.useState(false);

  const handleDeleteTask = () => {
    onDeleteTask(content);
    if (isCompleted) setTodoCompletedCounter((prev) => prev - 1);
  };

  return (
    <TaskCard>
      <RadioInput
        setIsCompleted={setIsCompleted}
        isCompleted={isCompleted}
        setTodoCompletedCounter={setTodoCompletedCounter}
      />
      <TaskContent>
        <p className={isCompleted ? "content checked" : "content"}>{content}</p>
        <button className="deleteButton" onClick={handleDeleteTask}>
          <Trash size={20} />
        </button>
      </TaskContent>
    </TaskCard>
  );
};
