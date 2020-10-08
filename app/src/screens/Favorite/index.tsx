import React, { useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, View } from "react-native";
import HeaderComponent from "../../components/Header";
import TeacherListComponent from "../../components/TeacherList";
import Teacher from "../../models/Teacher";
import { loadFavoritesTeachers } from "../../services/ClassesService";

export default function FavoriteScreen(props:any) {
  const [teachersFavorited, setTeachersFavorited] = useState<Teacher[]>([]);

  useFocusEffect(useCallback(() => {
    loadFavoritesTeachers().then(
      data => { 
        if(data){
          setTeachersFavorited(data);
        }
      }
    )
  }, []));

  return(
    <View style={styles.container}>
      <HeaderComponent title="Favorites Proffys" />
      <TeacherListComponent data={teachersFavorited} favorites={teachersFavorited.map(element => element.id)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7'
  },
});