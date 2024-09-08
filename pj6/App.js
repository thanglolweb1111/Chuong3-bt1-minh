import React from 'react';
import { View, Text, StyleSheet, Platform, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a platform-specific app!</Text>
      <Button title="Press Me" onPress={() => {}} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Platform.select({
      ios: 20,       
      android: 10,   
    }),
    backgroundColor: 'lightgray',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: Platform.select({
      ios: 'blue',     
      android: 'green', 
    }),
  },
});

export default App;
