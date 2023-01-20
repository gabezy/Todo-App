import React from "react";
import { ThemeProvider } from "styled-components";
import { FormToDo } from "./Components/FormTodo";
import { Header } from "./Components/Header";
import { Todo } from "./Components/Todo";
import { TodoEmpty } from "./Components/Todo/TodoEmpty";
import { TodoTask } from "./Components/Todo/TodoTask";
import { usePersistedState } from "./Hooks/usePersistedState";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/global";
import { defaultTheme } from "./styles/Theme/defaultTheme";

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
    <ThemeProvider theme={defaultTheme}>
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
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
