import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgLogo from '../../assets/images/give-classes-background.png';

export default function GiveClassesScreen(props:any) {
  const { navigation } = props;
  return(
    <View style={styles.container}>
      <ImageBackground 
        style={styles.content} 
        source={giveClassesBgLogo} 
        resizeMode={"contain"}
      >
        <Text style={styles.title}>Do you wanna be a Proffy Teacher ?</Text>
        <Text style={styles.description}>To get started, you need to register as a Teacher on our web site.</Text>
      </ImageBackground>
      <View style={styles.btnContainer}>
        <RectButton 
          style={[styles.btn, styles.btnSecondary]}
          onPress={() => {console.log("my web site url")}}
        >
          <Text style={styles.btnTxt}>
            All right! I wanna be Teacher.
          </Text>
        </RectButton>
        <RectButton 
          style={[styles.btn, styles.btnPrimary]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnTxt}>
            No thanks.
          </Text>
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: "Archivo700",
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 240
  },
  description: {
    marginTop: 24,
    color: '#D4C2FF',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins400',
    maxWidth: 240
  },
  btnContainer: {
    marginTop: 20
  },
  btn:{
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  btnPrimary:{
    backgroundColor: '#9871F5',
    marginVertical: 10,
  },
  btnSecondary:{
    backgroundColor: '#04D361',
    marginVertical: 10,
  },
  btnTxt: {
    fontFamily: 'Archivo700',
    color: '#FFF',
    fontSize: 16
  }
});