import React from "react";
import { TodoWrapper, TodoHeader } from "./styles";

interface TodoProps {
  children: JSX.Element | JSX.Element[];
  todoCreatedCounter: number;
  todoCompletedCounter: number;
}

export const Todo: React.FC<TodoProps> = ({
  children,
  todoCreatedCounter,
  todoCompletedCounter,
}) => {
  return (
    <TodoWrapper>
      <TodoHeader>
        <p className="taskTitle">
          Tarefas criadas <span className="counter">{todoCreatedCounter}</span>
        </p>
        <p className="taskTitle">
          Concluídas{" "}
          <span className="counter">
            {todoCreatedCounter <= 0
              ? todoCreatedCounter
              : `${todoCompletedCounter} de ${todoCreatedCounter}`}
          </span>
        </p>
      </TodoHeader>
      {children}
    </TodoWrapper>
  );
};
