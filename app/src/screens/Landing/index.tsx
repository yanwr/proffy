import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import landingLogo from '../../assets/images/landing.png';
import studyIcon from '../../assets/icons/study.png';
import giveClassesIcon from '../../assets/icons/give-classes.png';
import heartIcon from '../../assets/icons/heart.png';

export default function LandingScreen(props:any) {
  const { navigation } = props;

  function navigateTo(to:string) {
    navigation.navigate(to);
  };

  return (
    <View style={styles.container}>
      <Image source={landingLogo} style={styles.bannerContainer} />
      <Text style={styles.title}>
        Welcome, {'\n'}
        <Text style={styles.titleBold}>What do you desire to do?</Text>
      </Text>
      <View style={styles.btnContainer}>
        <RectButton 
          style={[styles.btn, styles.btnPrimary]}
          onPress={() => navigateTo('study')}
        >
          <Image source={studyIcon} />
          <Text style={styles.btnTxt}>To study</Text>
        </RectButton>
        <RectButton 
          style={[styles.btn, styles.btnSecondary]}
          onPress={() => navigateTo('give-classes')}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.btnTxt}>Give Classes</Text>
        </RectButton>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>
          Total of 200 connections {' '}
        </Text>
        <Image source={heartIcon} />
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
  bannerContainer: {
    width: '100%',
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'Poppins400',
    color: "#FFF",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 60
  },
  titleBold: {
    fontFamily: 'Poppins600'
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  btn: {
    height: 150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },
  btnPrimary: {
    backgroundColor: '#9871F5'
  },
  btnSecondary: {
    backgroundColor: '#04D361'
  },
  btnTxt: {
    fontFamily: 'Archivo700',
    color: '#FFF',
    fontSize: 20
  },
  totalContainer: {
    flexDirection: 'row',
    marginTop: 40,
    maxWidth: 140,
  },
  totalText: {
    fontFamily: 'Poppins400',
    color: '#D4C2FF',
    fontSize: 12,
    lineHeight: 20,
  },
});