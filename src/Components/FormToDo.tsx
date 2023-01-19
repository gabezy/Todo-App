import React, { ChangeEvent, FormEvent } from "react";
import { Button, Form, Input } from "../styles/styles";
import { PlusCircle } from "phosphor-react";

interface FormToDoProps {
  handleSubmit: (event: FormEvent) => void;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FormToDo: React.FC<FormToDoProps> = ({
  handleSubmit,
  handleOnChange,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Adicione uma nova tarefa" onChange={handleOnChange} />
      <Button>
        Criar
        <PlusCircle size={16} weight="bold" />
      </Button>
    </Form>
  );
};
