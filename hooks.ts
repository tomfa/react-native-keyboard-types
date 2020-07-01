import { useCallback, useRef, useState } from "react";
import { TextInput } from "react-native";

export const useInputFocus = () => {
  const refs = useRef<{ [key: string]: TextInput }>({});
  const [currentFocus, setCurrentFocus] = useState<string>("");
  const focus = useCallback(
    (key: string) => {
      if (refs.current[currentFocus]) {
        refs.current[currentFocus].blur();
      }
      if (refs.current[key]) {
        refs.current[key].focus();
      }
    },
    [currentFocus]
  );
  const setRef = (name: string) => (input: TextInput) => {
    refs.current[name] = input;
  };
  return { focus, setRef };
};
