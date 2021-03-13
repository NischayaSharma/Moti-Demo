
import React from 'react';
import { Dimensions, Pressable, StatusBar, StyleSheet,  } from 'react-native';
import { useAnimationState, View as MotiView } from 'moti';

const {width, height} = Dimensions.get("screen")
export default function App() {
  const [pressed, setPressed] = React.useState(true)
  return (
    <Pressable 
      style={styles.container}
      onPress={() => {
        setPressed(!pressed);
      }}>
      <MotiView
        animate={{
          translateY: pressed ? 100:0,
          delay: 2000,
        }}
        style={styles.shape}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  shape: {
    height: 250,
    width: 250,
    backgroundColor: "blue",
    borderRadius: 50,
  }
})