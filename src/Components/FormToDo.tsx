import React, { ChangeEvent, FormEvent } from "react";
import { Button, Form, Input } from "../styles/styles";
import { PlusCircle } from "phosphor-react";

interface FormToDoProps {
  handleCreateNewTodoTask: (event: FormEvent) => void;
  handleTodoText: (event: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

export const FormToDo: React.FC<FormToDoProps> = ({
  handleCreateNewTodoTask,
  handleTodoText,
  inputValue,
}) => {
  return (
    <Form onSubmit={handleCreateNewTodoTask}>
      <Input
        placeholder="Adicione uma nova tarefa"
        onChange={handleTodoText}
        value={inputValue}
      />
      <Button>
        Criar
        <PlusCircle size={16} weight="bold" />
      </Button>
    </Form>
  );
};
