import React, { ChangeEvent, FormEvent } from "react";
import { FormToDo } from "./Components/FormToDo";
import { Header } from "./Components/Header";
import { Todo } from "./Components/Todo/Todo";
import { TodoEmpty } from "./Components/Todo/TodoEmpty";
import { TodoTask } from "./Components/Todo/TodoTask";
import { useForm } from "./Hooks/useForm";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/styles";
function App() {
  const todoText = useForm(false);
  const [todoList, setTodoList] = React.useState([
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  ]);
  const [todoCreatedCounter, setTodoCreatedCounter] = React.useState(0);
  const [todoCompletedCounter, setTodoCompletedCounter] = React.useState(0);

  const handleCreateNewTodoTask = (event: FormEvent) => {
    event.preventDefault();
    if (todoText.validate()) {
      setTodoList((prev) => [...prev, todoText.value]);
      setTodoCreatedCounter((prev) => prev + 1);
      todoText.setValue("");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <FormToDo
          handleCreateNewTodoTask={handleCreateNewTodoTask}
          handleTodoText={todoText.handleValue}
          inputValue={todoText.value}
        />
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
