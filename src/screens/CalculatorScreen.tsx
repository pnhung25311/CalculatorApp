import { SafeAreaView, View, Text, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import CalculatorButton from '../components/CalculatorButton';

const butnCalculator = [
  ['C', '/', '*', 'Del'],
  ['7', '8', '9', '-'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '='],
  ['0', '.'],
];

const CalculatorScreen = () => {
  const [input, setInput] = useState<string>('');

  const handlePress = (value:string) => {
    switch (value) {
      case 'C':
        setInput('');
        break;
      case 'Del':
        setInput(prev => prev.slice(0, -1));
        break;
      case '=':
        calculate();
        break;
      default:
        setInput(prev => prev + value);
        break;
    }
  };

  const calculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      Alert.alert('Error', 'Invalid Expression!');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{input || '0'}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {butnCalculator.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((label) => (
              <CalculatorButton key={label} label={label} onPress={handlePress} />
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222', justifyContent: 'flex-end' },
  display: {
    minHeight: 120,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: { fontSize: 48, color: '#fff' },
  buttonsContainer: { padding: 10 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
