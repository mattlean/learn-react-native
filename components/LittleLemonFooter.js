import * as React from 'react';
import { Text, View } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: '#F4CE14',
        marginBottom: 10
      }}>
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
