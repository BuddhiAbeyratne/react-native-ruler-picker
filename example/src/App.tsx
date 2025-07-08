import * as React from 'react';

import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RulerPicker } from 'react-native-ruler-picker';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <RulerPicker
        min={0}
        unit="cm"
        max={240}
        step={1}
        fractionDigits={0}
        initialValue={0}
        onValueChange={(number) => console.log('onValueChange', number)}
        onValueChangeEnd={(number) => console.log('onValueChangeEnd', number)}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
