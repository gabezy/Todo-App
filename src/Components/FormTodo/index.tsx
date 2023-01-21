import React, { Dispatch, FormEvent, SetStateAction } from "react";
import { Form, Input, Button } from "./styles";
import { PlusCircle } from "phosphor-react";
import { Error } from "../../Helper/Erro";
import { TodoListProps } from "../../App";
import { handleValueProps } from "../../Hooks/useForm";

interface FormToDoProps {
  createNewTodoTask: () => void;
  handleValue: ({ target }: handleValueProps) => void;
  value: string;
  error: boolean | string;
}

export const FormToDo: React.FC<FormToDoProps> = ({
  createNewTodoTask,
  handleValue,
  value,
  error,
}) => {
  const handleCreateNewTodoTask = (event: FormEvent) => {
    event.preventDefault();
    createNewTodoTask();
  };

  return (
    <Form onSubmit={handleCreateNewTodoTask}>
      <Input
        placeholder="Adicione uma nova tarefa"
        onChange={handleValue}
        value={value}
      />
      <Button>
        Criar
        <PlusCircle size={16} weight="bold" />
      </Button>
      {error && <Error>{error}</Error>}
    </Form>
  );
};
