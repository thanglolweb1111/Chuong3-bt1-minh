import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';

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

  return (
    <View style={[styles.container, orientation === 'landscape' ? styles.rowLayout : styles.columnLayout]}>
      <View style={styles.buttonContainer}>
        <Button title="Button 1" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Button 2" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  rowLayout: {
    flexDirection: 'row',  
  },
  columnLayout: {
    flexDirection: 'column',  
  },
  buttonContainer: {
    margin: 10,
  },
});

export default App;
