import * as React from 'react';
import { View } from 'react-native';

 // Import a local component here
 import LittleLemonHeader from './LittleLemonHeader';
 import LittleLemonFooter from './LittleLemonFooter';
 import WelcomeScreen from './WelcomeScreen'
 import styles from './style'
//  import MenuItems from './MenuItems'
 
 export default function App() {
  return (
    <>
      <View style={styles.headerContainer}>
        <LittleLemonHeader />
        <WelcomeScreen />
        {/* <MenuItems /> */}
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
