import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Dimensions, Image } from 'react-native';

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

  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth * 0.8; 

  return (
    <View style={[styles.container, orientation === 'landscape' ? styles.landscapeLayout : styles.portraitLayout]}>
      <Image
        source={{ uri: 'https://i.imgur.com/ZhwY1br.png' }}
        style={{
          width: imageWidth,
          height: orientation === 'landscape' ? imageWidth * 0.4 : imageWidth * 0.6, 
        }}
        resizeMode="contain"
      />
      <View style={styles.buttonContainer}>
        <Button title="Button 1" onPress={() => {}} style={orientation === 'landscape' ? styles.largeButton : styles.smallButton} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Button 2" onPress={() => {}} style={orientation === 'landscape' ? styles.largeButton : styles.smallButton} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  portraitLayout: {
    flexDirection: 'column', 
  },
  landscapeLayout: {
    flexDirection: 'row', 
  },
  buttonContainer: {
    margin: 10,
  },
  largeButton: {
    padding: 20, 
  },
  smallButton: {
    padding: 10, 
  },
});

export default App;
