import * as React from 'react';  
import { View, Text } from 'react-native';
    
export default function LittleLemonHeader() {
  return (
    <View
      style={{
        backgroundColor: '#F4CE14',
        flex: 0.1
      }}>
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
