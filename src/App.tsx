import React, { ChangeEvent, FormEvent } from "react";
import { FormToDo } from "./Components/FormToDo";
import { Header } from "./Components/Header";
import { Todo } from "./Components/Todo/Todo";
import { TodoEmpty } from "./Components/Todo/TodoEmpty";
import { TodoTask } from "./Components/Todo/TodoTask";
import { usePersistedState } from "./Hooks/usePersistedState";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/styles";
function App() {
  const [todoList, setTodoList] = usePersistedState<string[]>("Todo", []);
  const [todoCreatedCounter, setTodoCreatedCounter] = React.useState(
    todoList.length
  );
  const [todoCompletedCounter, setTodoCompletedCounter] = React.useState(0);

  const onDeleteTask = (contentTaskToBeDeleted: string) => {
    setTodoList((prev) => {
      return prev.filter((content) => content !== contentTaskToBeDeleted);
    });
    setTodoCreatedCounter((prev) => prev - 1);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <FormToDo
          setTodoCreatedCounter={setTodoCreatedCounter}
          setTodoList={setTodoList}
        />
        <Todo
          todoCreatedCounter={todoCreatedCounter}
          todoCompletedCounter={todoCompletedCounter}
        >
          {todoList.length ? (
            todoList.map((todo) => (
              <TodoTask
                key={todo}
                content={todo}
                onDeleteTask={onDeleteTask}
                setTodoCompletedCounter={setTodoCompletedCounter}
              />
            ))
          ) : (
            <TodoEmpty />
          )}
        </Todo>
      </Container>
    </>
  );
}

export default App;
