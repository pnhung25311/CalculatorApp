import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  label: string;
  onPress: (value: string) => void;
};

const CalculatorButton = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(label)}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
    height: 80,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
});
