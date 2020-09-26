import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import VolumeControl, { VolumeControlEvents } from "react-native-volume-control";
// это по идее надо подключить так: https://www.npmjs.com/package/react-native-volume-control
// тогда все заработает

import { header, howToUse } from './src/constants/mainPageContent';

const App = () => {
  const [volume, setVolume] = useState(0);


  const volEvent = () => VolumeControlEvents.addListener(
      "VolumeChanged",
      volumeEvent,
    );

  const volumeEvent = (event: any) => {
    setVolume(event.volume);
  };

  useEffect(() => {
    volEvent();
    console.log(VolumeControl); // тут должен быть не null
    // return volEvent.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{header}</Text>
      <Text>volume: {volume}</Text>
      <Button title="help" onPress={() => { alert(howToUse) }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
