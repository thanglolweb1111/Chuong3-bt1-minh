import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';

const App = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const updateWidth = () => {
      const width = Dimensions.get('window').width;
      setScreenWidth(width);
    };
    Dimensions.addEventListener('change', updateWidth);
    return () => {
      Dimensions.removeEventListener('change', updateWidth);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, { width: screenWidth / 2 - 15 }]}>
        <Button title="Button 1" />
      </View>
      <View style={[styles.buttonContainer, { width: screenWidth / 2 - 15 }]}>
        <Button title="Button 2" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  buttonContainer: {
    marginHorizontal: 5,
  },
});

export default App;
