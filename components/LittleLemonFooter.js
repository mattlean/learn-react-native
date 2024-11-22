import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default function LittleLemonFooter() {
  return (
    <View
      style={styles.footer}>
      <Text
        style={{
          color: 'black',
          fontSize: 18,
          textAlign: 'center'
        }}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}
