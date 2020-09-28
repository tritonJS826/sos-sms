import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SystemSetting from "react-native-system-setting";

import { header, howToUse } from "./src/constants/mainPageContent";

const App = () => {
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    const volumeListener = SystemSetting.addVolumeListener((/* data */) => {
      setVolume(volume + 1);
    });

    return () => {
      SystemSetting.removeVolumeListener(volumeListener);
    };
  }, [volume]);

  return (
    <View style={styles.container}>
      <Text>{header}</Text>
      <Text>volume: {volume}</Text>
      <Button
        title="help"
        onPress={() => {
          alert(howToUse);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
