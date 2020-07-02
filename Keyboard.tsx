import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';

export enum KeyboardType {
  default = 'default',
  emailAddress = 'email-address',
  numeric = 'numeric',
  phonePad = 'phone-pad',
  numberPad = 'number-pad',
  decimalPad = 'decimal-pad',
  // iOS only
  asciiCapable = 'ascii-capable',
  numbersAndPunctuation = 'numbers-and-punctuation',
  url = 'url',
  namePhonePad = 'name-phone-pad',
  twitter = 'twitter',
  webSearch = 'web-search',
  // Android only
  visiblePassword = 'visible-password',
}

const iOSKeyboards = [
  KeyboardType.asciiCapable,
  KeyboardType.numbersAndPunctuation,
  KeyboardType.url,
  KeyboardType.namePhonePad,
  KeyboardType.twitter,
  KeyboardType.webSearch,
];

const AndroidKeyboards = [KeyboardType.visiblePassword];

interface KeyBoardProps {
  type: KeyboardType;
  myRef?: (input: TextInput) => any;
  autoFocus: boolean;
  onSubmitEditing: () => any;
}

const DisclaimerText = ({ type }: { type: KeyboardType }) => {
  if (iOSKeyboards.includes(type)) {
    return <Text style={styles.disclaimer}>- iOS only</Text>;
  }
  if (AndroidKeyboards.includes(type)) {
    return <Text style={styles.disclaimer}>- Android only</Text>;
  }
  return null
};

const KeyBoard = ({
  type,
  myRef,
  autoFocus,
  onSubmitEditing,
}: KeyBoardProps) => (
  <>
    <Text style={styles.label}>
      {type}{' '}
      <DisclaimerText type={type} />
    </Text>
    <TextInput
      style={styles.input}
      ref={myRef}
      placeholder={type}
      keyboardType={type}
      autoFocus={autoFocus}
      onSubmitEditing={onSubmitEditing}
    />
  </>
);

const styles = StyleSheet.create({
  label: { fontWeight: 'bold', marginBottom: 10 },
  disclaimer: { fontWeight: 'normal' },
  input: { backgroundColor: 'white', padding: 8, marginBottom: 20 },
});

export default KeyBoard;
