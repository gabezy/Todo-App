import { ClipboardText } from "phosphor-react";
import React from "react";
import { TodoContent } from "../../styles/styles";
import { dark } from "../../styles/Variables";

export const TodoEmpty = () => {
  return (
    <TodoContent>
      <ClipboardText size={50} color={dark.colorBase.gray300} />
      <div className="warning">
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </TodoContent>
  );
};
