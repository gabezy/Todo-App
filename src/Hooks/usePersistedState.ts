import React, { Dispatch, SetStateAction } from "react";

interface TaskProps {
  content: string;
  completed: boolean;
}

type Response = [
  TaskProps[],
  Dispatch<SetStateAction<TaskProps[]>>,
  (content: string) => void,
  (content: string) => void
];

export const usePersistedState = (
  key: string,
  initialState: TaskProps[]
): Response => {
  const [state, setState] = React.useState<TaskProps[]>(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) return JSON.parse(storageValue);
    return initialState;
  });

  const setTodoTaskCompleted = (contentTodoTask: string) => {
    setState((prev) => {
      return prev.map((item) => {
        if (item.content === contentTodoTask) {
          item.completed = true;
        }
        return item;
      });
    });
  };

  const setTodoTaskUncompleted = (contentTodoTask: string) => {
    setState((prev) => {
      return prev.map((item) => {
        if (item.content === contentTodoTask) {
          item.completed = false;
        }
        return item;
      });
    });
  };

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState, setTodoTaskCompleted, setTodoTaskUncompleted];
};
