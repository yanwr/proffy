import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderComponent from "../../components/Header";
import TeacherListComponent from "../../components/TeacherList";

export default function FavoriteScreen(props:any) {
  return(
    <View style={styles.container}>
      <HeaderComponent title="Favorites Proffys" />
      <TeacherListComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7'
  },
});