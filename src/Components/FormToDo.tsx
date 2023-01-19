import React, { ChangeEvent, FormEvent, SetStateAction } from "react";
import { Button, Form, Input } from "../styles/styles";
import { PlusCircle } from "phosphor-react";
import { useForm } from "../Hooks/useForm";

interface FormToDoProps {
  setTodoCreatedCounter: React.Dispatch<SetStateAction<number>>;
  setTodoList: React.Dispatch<SetStateAction<string[]>>;
}

export const FormToDo: React.FC<FormToDoProps> = ({
  setTodoCreatedCounter,
  setTodoList,
}) => {
  const todoText = useForm(false);

  const handleCreateNewTodoTask = (event: FormEvent) => {
    event.preventDefault();
    if (todoText.validate()) {
      setTodoList((prev) => [...prev, todoText.value]);
      setTodoCreatedCounter((prev) => prev + 1);
      todoText.setValue("");
    }
  };

  return (
    <Form onSubmit={handleCreateNewTodoTask}>
      <Input
        placeholder="Adicione uma nova tarefa"
        onChange={todoText.handleValue}
        value={todoText.value}
      />
      <Button>
        Criar
        <PlusCircle size={16} weight="bold" />
      </Button>
      {todoText.error && <p>{todoText.error}</p>}
    </Form>
  );
};
