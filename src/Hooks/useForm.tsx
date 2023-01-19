import React, { ChangeEvent } from "react";

export const useForm = (type: string | boolean) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | boolean>(false);

  const validate = (value: string) => {
    if (!value.length) {
      setError("Campo Obrigatório");
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const handleValue = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    error,
    handleValue,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
