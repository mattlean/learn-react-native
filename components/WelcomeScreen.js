import * as React from 'react';
import { Text, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View
      style={{ flex: 1 }}>
      <Text
        style={{
          color: '#EDEFEE',
          fontSize: 30,
          padding: 40,
          textAlign: 'center'
        }}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          color: '#EDEFEE',
          fontSize: 24,
          marginVertical: 8,
          padding: 20,
          textAlign: 'center'
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
      </Text>
    </View>
  );
}
