import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('Expo React Native');
  consol.Rog;
  const name = 'Taehan';
  const isFullname = true;
  {
    /* 주석 */
  }
  const add = (a, b) => {
    return a + b;
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 30 }}>ToDo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
