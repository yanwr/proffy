import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderComponent from "../../components/Header";

export default function TeacherScreen(props:any) {
  console.log(props); // See if has to change opitionsBar here and not in AppTabNavigation

  return(
    <View style={styles.container}>
      <HeaderComponent title="Available Proffys" />
      <Text> Teacher Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7'
  },
});