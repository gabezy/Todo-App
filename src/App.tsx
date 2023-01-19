import React, { ChangeEvent, FormEvent } from "react";
import { FormToDo } from "./Components/FormToDo";
import { Header } from "./Components/Header";
import { Todo } from "./Components/Todo/Todo";
import { TodoEmpty } from "./Components/Todo/TodoEmpty";
import { TodoTask } from "./Components/Todo/TodoTask";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/styles";
function App() {
  const [todo, setTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState([
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  ]);
  const [todoCreatedCounter, setTodoCreatedCounter] = React.useState(0);
  const [todoCompletedCounter, setTodoCompletedCounter] = React.useState(0);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTodo(target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <FormToDo handleSubmit={handleSubmit} handleOnChange={handleOnChange} />
        <Todo
          todoCreatedCounter={todoCreatedCounter}
          todoCompletedCounter={todoCompletedCounter}
        >
          {todoList.length ? (
            todoList.map((todo) => <TodoTask key={todo} content={todo} />)
          ) : (
            <TodoEmpty />
          )}
        </Todo>
      </Container>
    </>
  );
}

export default App;
