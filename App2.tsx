import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import logo from '../SplashScreen/assets/instaLogo.png'
import meta from '../SplashScreen/assets/MetaLogo.png'

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.from}>
        FROM
      </Text>
      <Image
        source={meta}
        style={styles.meta}
      />
    </View>
  );
}
