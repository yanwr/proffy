import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FavoriteScreen(props:any) {
  return(
    <View style={styles.container}>
      <Text> fAVORITE Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7'
  },
});