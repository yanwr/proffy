import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import leftArrowIcon from '../../assets/icons/back.png';
import smallLogo from '../../assets/images/logo.png';

export default function HeaderComponent(props:any) {
  const { title } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <BorderlessButton
          onPress={() => navigation.goBack() }
        >
          <Image source={leftArrowIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={smallLogo} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257E5'
  },
  topBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  title: {
    fontFamily: 'Archivo700',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40
  }
});