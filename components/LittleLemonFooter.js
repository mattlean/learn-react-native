import * as React from 'react';
import { Text, View } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: '#F4CE14',
      }}
    >
      <Text style={{ paddingHorizontal: 40, fontStyle: 'italic' }}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}