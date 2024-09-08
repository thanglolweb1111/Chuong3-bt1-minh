import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

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
  const imageWidth = screenWidth * 0.8; 
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://wallpaperaccess.com/full/11739.jpg' }}
        style={{ width: imageWidth, height: imageWidth * 0.6 }} 
        resizeMode="contain"
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

export default App;
