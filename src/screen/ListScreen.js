import React from 'react';
import { StatusBar, Text, View, StyleSheet, Button } from 'react-native';

const ListScreen = (navigation, route) => {
  console.log('Rendering ListScreen', route.params);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>List Screen</Text>
      <Button title="push" onPress={() => navigation.push('List')} />
      <Button
        title="navigate"
        onPress={() => navigation.navigation('List', { ts: Date.now() })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListScreen;
