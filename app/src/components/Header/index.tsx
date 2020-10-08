import React, { ReactNode } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import leftArrowIcon from '../../assets/icons/back.png';
import smallLogo from '../../assets/images/logo.png';

interface Props {
  title: string;
  btnShowFormFilter?: ReactNode;
};

const HeaderComponent: React.FC<Props> = ({ title, children, btnShowFormFilter }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <BorderlessButton
          onPress={() => navigation.navigate('landing') }
        >
          <Image source={leftArrowIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={smallLogo} resizeMode="contain" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        { btnShowFormFilter }
      </View>
      <View>
        {children}
      </View>
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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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

export default HeaderComponent;