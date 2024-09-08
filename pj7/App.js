import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Dimensions, Platform, Text } from 'react-native';

const App = () => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {

    const handleOrientationChange = ({ window: { width, height } }) => {
      if (width > height) {
        setOrientation('landscape');
      } else {
        setOrientation('portrait');
      }
    };
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);
    return () => subscription?.remove();
  }, []);
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
  },
});

export default App;
