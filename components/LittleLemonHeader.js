import * as React from 'react';  
import { View, Text } from 'react-native';
import styles from './style';
    
export default function LittleLemonHeader() {
  return (
    <View
      style={styles.header}>
      <Text
        style={{
          color: 'black',
          fontSize: 30,
          padding: 20,
          textAlign: 'center'
        }}>
        Little Lemon
      </Text>
    </View>
  );
}
