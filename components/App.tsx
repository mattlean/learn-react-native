import * as React from 'react';
import { View } from 'react-native';

 // Import a local component here
 import LittleLemonHeader from './LittleLemonHeader';
 import LittleLemonFooter from './LittleLemonFooter';
 
 export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
        justifyContent: 'space-between'
      }}>
        <LittleLemonHeader />
        <LittleLemonFooter />
    </View>
  );
}
