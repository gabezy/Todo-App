import React from "react";
import { TodoHeader, TodoWrapper } from "../../styles/styles";

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
          Concluídas <span className="counter">{todoCompletedCounter}</span>
        </p>
      </TodoHeader>
      {children}
    </TodoWrapper>
  );
};
