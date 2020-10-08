import React, { useEffect, useState } from "react";
import { getFavoritesTeacherById, loadClasses, loadFavoritesTeachers } from "../../services/ClassesService";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import HeaderComponent from "../../components/Header";
import TeacherListComponent from "../../components/TeacherList";

export default function TeacherScreen(props:any) {
  //console.log(props); // See if has to change opitionsBar here and not in AppTabNavigation
  const [showFilter, setShowFilter] = useState(false);
  const [favoritesTeachers, setFavoritesTeachers] = useState<any>([]);
  const [classes, setClasses] = useState<[] | any>([]);
  const [filters, setFilters] = useState<{ weekDay:string, subject: string, time:string } | any>(null);

  useEffect(() => {
    getFavoritesTeacherById().then( data => {
      if(data){
        setFavoritesTeachers(data);
      }
    })
  }, []);

  useEffect(() => {
    handleLoadClasses();
  }, []);

  function handleLoadClasses() {
    loadClasses(filters)
    .then(data => setClasses(data))
    .catch(() => setClasses(null))
  };

  return(
    <View style={styles.container}>
      <HeaderComponent 
        title="Available Proffys"
        btnShowFormFilter={
          <BorderlessButton
            onPress={() => setShowFilter(!showFilter)}
          >
            <Feather name="filter" size={24} color="#FFF" />
          </BorderlessButton>
        }
      >
       { showFilter && <View style={styles.formContainer}>
          <Text style={styles.label}>Subject</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setFilters({...filters, subject: value })}
            placeholder="What's the subject ..."
            placeholderTextColor="#C1BCCC"
          />
          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Week day</Text>
              <TextInput
                style={styles.input}
                onChangeText={value => setFilters({...filters, weekDay: value })}
                placeholder="Select a week day ..."
                placeholderTextColor="#C1BCCC"
              />  
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Time</Text>
              <TextInput
                style={styles.input}
                onChangeText={value => setFilters({...filters, time: value })}
                placeholder="Select a time ..."
                placeholderTextColor="#C1BCCC"
              />  
            </View>
          </View>
          <RectButton 
            style={styles.btnSubmit}
            onPress={handleLoadClasses}
          >
            <Text style={styles.btnSubmitTxt}>Filter</Text>
          </RectButton>
        </View> }
      </HeaderComponent>
      <TeacherListComponent data={classes} favorites={favoritesTeachers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7'
  },
  formContainer: {
    marginBottom: 8,
  },
  label: {
    color: '#D4C2FF',
    fontFamily: 'Poppins400'
  },
  input: {
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 8
  },
  inputGroup: {
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  inputContainer: {
    width: '48%'
  },
  btnSubmit: {
    backgroundColor:'#04D361',
    height: 42,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSubmitTxt: {
    color: '#FFF',
    fontFamily: 'Archivo700',
    fontSize: 16,
  }
});