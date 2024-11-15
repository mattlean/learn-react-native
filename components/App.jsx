import * as React from 'react';
import { View } from 'react-native';

 // Import a local component here
 import LittleLemonHeader from './LittleLemonHeader';
 import LittleLemonFooter from './LittleLemonFooter';
 import WelcomeScreen from './WelcomeScreen'
 import MenuItems from './MenuItems'
 
 export default function App() {
  return (
    <>
      <View
        style={{
          backgroundColor: '#495E57',
          flex: 1
        }}>
          <LittleLemonHeader />
          <WelcomeScreen />
          {/* <MenuItems /> */}
        </View>
        <View style={{ backgroundColor: '#495E57' }}>
          <LittleLemonFooter />
        </View>
    </>
  );
}
