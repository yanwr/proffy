import React, { useState } from 'react';
import Teacher from '../../models/Teacher';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/icons/unfavorite.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import { toggleFavoritesTeachers } from '../../services/ClassesService';
import { createConneciton } from '../../services/ConnectionService';

interface Props {
  item: Teacher;
  favorited: boolean;
};

const TeacherItemComponent: React.FC<Props> = ({ item, favorited }) => {
  const [isFavorite, setIsFavorite] = useState(favorited);

  async function handleToggleFavoritesTeachers() {
    if (isFavorite) {
      setIsFavorite(false);
      await toggleFavoritesTeachers(item);
    } else {
      setIsFavorite(true);
      await toggleFavoritesTeachers(item, true);
    }
  };

  async function openWhatsApp() {
    await createConneciton(item.user_id);
    Linking.openURL(`whatsapp://send?phone=${item.phone}`);
  };

	return(
		<View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image 
          style={styles.avatar}
          source={{uri: item.avatar}}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.userNameTxt}>{item.name}</Text>
          <Text style={styles.subjectTxt}>{item.subject}</Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bio}>
          {item.bio}
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.price}>
          Price/hour {'  '}
          <Text style={styles.valuePrice}>
            R$ {item.price}
          </Text>
        </Text>
        <View style={styles.btnContainer}>
          <RectButton
            style={[
              styles.btnFavorite,
              isFavorite && styles.itemFavorited
            ]}
            onPress={handleToggleFavoritesTeachers}
          >
            {
              isFavorite 
                ? <Image source={unfavoriteIcon}/>
                : <Image source={heartOutlineIcon}/>
            }
          </RectButton>
          <RectButton
            style={styles.btnContact}
            onPress={openWhatsApp}
          >
            <Image source={whatsappIcon}/>
            <Text style={styles.contactTxt}>Come in call</Text>
          </RectButton>
        </View>
      </View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden'
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EEE'
  },
  infoContainer: {
    marginLeft: 16
  },
  userNameTxt: {
    fontFamily: 'Archivo700',
    color: '#32264D',
    fontSize: 20
  },
  subjectTxt: {
    fontFamily: 'Poppins400',
    color: '#6A6180',
    fontSize: 12,
    marginTop: 4
  },
  bioContainer: {
    marginHorizontal: 24,
  },
  bio: {
    fontFamily: 'Poppins400',
    fontSize: 14,
    lineHeight: 24,
    color: '#6A6180'
  },
  footerContainer: {
    marginTop: 24,
    backgroundColor: '#F4F4FC',
    padding: 24,
    alignItems: 'center'
  },
  price: {
    fontFamily: 'Poppins400',
    color: '#6A6180',
    fontSize: 14,
  },
  valuePrice: {
    fontFamily: 'Archivo700',
    color: '#8257E5',
    fontSize: 16
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  btnFavorite: {
    backgroundColor:'#8257E5',
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  itemFavorited: {
    backgroundColor: '#E33D3D',
  },
  btnContact: {
    backgroundColor:'#04D361',
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  contactTxt: {
    color: '#FFF',
    fontFamily: 'Archivo700',
    fontSize: 16,
    marginLeft: 16
  }
});

export default TeacherItemComponent;