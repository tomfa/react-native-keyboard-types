import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import KeyBoard, { KeyboardType } from './Keyboard';
import { useInputFocus } from "./hooks";

interface KeyBoardPropType {
  type: KeyboardType;
  nextType?: KeyboardType;
  autoFocus: boolean;
}

const App = () => {
  const { focus, setRef } = useInputFocus();

  const keyBoardProps: Array<KeyBoardPropType> = useMemo(() => {
    const allKeyboardTypes: Array<KeyboardType> = Object.values(KeyboardType);
    return allKeyboardTypes
      .reverse()
      .reduce((acc: Array<KeyBoardPropType>, type) => {
        const nextType = acc.length > 0 ? acc[acc.length - 1].type : undefined;
        const props: KeyBoardPropType = {
          type,
          nextType,
          autoFocus: acc.length === Object.values(KeyboardType).length - 1,
        };
        acc.push(props);
        return acc;
      }, [])
      .reverse();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>React Native keyboardType demo</Text>
      {keyBoardProps.map(({ type, nextType, autoFocus }) => (
        <KeyBoard
          key={type}
          type={type}
          myRef={setRef(type)}
          onSubmitEditing={() => !!nextType && focus(nextType)}
          autoFocus={autoFocus}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'hotpink', padding: 10, minHeight: '100%' },
  header: { fontSize: 32, marginBottom: 20 }
});


export default App;
