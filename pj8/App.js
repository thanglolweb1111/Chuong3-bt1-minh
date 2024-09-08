import React from 'react';
import { View, StyleSheet, StatusBar, Text, Platform, useWindowDimensions } from 'react-native';

const App = () => {
  const { width, height } = useWindowDimensions();

  const orientation = width > height ? 'landscape' : 'portrait';


  const statusBarStyle = {
    backgroundColor: Platform.select({
      ios: orientation === 'portrait' ? 'blue' : 'darkblue',
      android: orientation === 'portrait' ? 'green' : 'darkgreen',
    }),
    barStyle: Platform.select({
      ios: orientation === 'portrait' ? 'light-content' : 'dark-content',
      android: orientation === 'portrait' ? 'light-content' : 'dark-content',
    }),
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={statusBarStyle.backgroundColor}
        barStyle={statusBarStyle.barStyle}
      />
      <Text style={styles.text}>Hướng Hiện Tại: {orientation}</Text>
      <Text style={styles.text}>Screen Width: {width}</Text>
      <Text style={styles.text}>Screen Height: {height}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  text: {
    fontSize: 20,
    color: 'black',
    margin: 10,
  },
});

export default App;
