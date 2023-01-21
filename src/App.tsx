import React, { ChangeEvent } from "react";
import { ThemeProvider } from "styled-components";
import { FormToDo } from "./Components/FormTodo";
import { Header } from "./Components/Header";
import { Todo } from "./Components/Todo";
import { TodoEmpty } from "./Components/Todo/TodoEmpty";
import { TodoTask } from "./Components/Todo/TodoTask";
import { useForm } from "./Hooks/useForm";
import { usePersistedState } from "./Hooks/usePersistedState";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/global";
import { defaultTheme } from "./styles/Theme/defaultTheme";

export interface TodoListProps {
  completed: boolean;
  content: string;
}

function App() {
  const todoText = useForm(false);

  const [todoList, setTodoList, setTodoTaskCompleted, setTodoTaskUncompleted] =
    usePersistedState("List", [{ completed: false, content: "Study React" }]);
  const [todoCreatedCounter, setTodoCreatedCounter] = React.useState(
    todoList.length
  );
  const [todoCompletedCounter, setTodoCompletedCounter] = React.useState(() => {
    let completedTodo = 0;
    for (const todo of todoList) {
      if (todo.completed) completedTodo++;
    }
    return completedTodo;
  });

  const createNewTodoTask = () => {
    if (todoText.validate()) {
      const newTodoTask = {
        completed: false,
        content: todoText.value,
      };
      setTodoList((prev) => [...prev, newTodoTask]);
      setTodoCreatedCounter((prev) => prev + 1);
      todoText.setValue("");
    }
  };

  const onDeleteTask = (contentTaskToBeDeleted: string) => {
    setTodoList((prev) => {
      return prev.filter(({ content }) => content !== contentTaskToBeDeleted);
    });
    setTodoCreatedCounter((prev) => prev - 1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Container>
        <FormToDo
          createNewTodoTask={createNewTodoTask}
          handleValue={todoText.handleValue}
          value={todoText.value}
          error={todoText.error}
        />
        <Todo
          todoCreatedCounter={todoCreatedCounter}
          todoCompletedCounter={todoCompletedCounter}
        >
          {todoList.length ? (
            todoList.map(({ completed, content }) => (
              <TodoTask
                key={content}
                completed={completed}
                content={content}
                onDeleteTask={onDeleteTask}
                setTodoCompletedCounter={setTodoCompletedCounter}
                setTodoTaskCompleted={setTodoTaskCompleted}
                setTodoTaskUncompleted={setTodoTaskUncompleted}
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
