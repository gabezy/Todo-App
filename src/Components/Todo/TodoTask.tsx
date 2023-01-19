import { Trash } from "phosphor-react";
import React from "react";
import { TaskCard, TaskContent } from "../../styles/styles";
import { dark } from "../../styles/Variables";
import { RadioInput } from "../RadioInput";

type TodoTasksProps = { content: string };

export const TodoTask: React.FC<TodoTasksProps> = ({ content }) => {
  return (
    <TaskCard>
      <RadioInput />
      <TaskContent>
        <p className="content">{content}</p>
        <Trash size={20} color={dark.colorBase.gray300} />
      </TaskContent>
    </TaskCard>
  );
};
