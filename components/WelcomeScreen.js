import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import styles from './style';

export default function WelcomeScreen() {
  return (
    <ScrollView
      indicatorStyle="white"
      style={{ flex: 1 }}>
      <Text style={styles.welcomeScreenTitle}>
        Welcome to Little Lemon
      </Text>
      <Text style={styles.welcomeScreenBody}>
        {`Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!\n
Little Lemon? is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!\n
Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!`}
      </Text>
    </ScrollView>
  );
}
