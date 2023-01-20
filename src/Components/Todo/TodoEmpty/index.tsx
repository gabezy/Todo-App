import { ClipboardText } from "phosphor-react";
import React from "react";
import { TodoContentWrapper, TaskEmptyWarning } from "./styles";

export const TodoEmpty = () => {
  return (
    <TodoContentWrapper>
      <ClipboardText size={50} />
      <TaskEmptyWarning>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </TaskEmptyWarning>
    </TodoContentWrapper>
  );
};
