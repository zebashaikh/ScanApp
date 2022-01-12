import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigator from '@navigation/Router'



const App=()  => {
  
  return (
    <>
    <StatusBar
        translucent={false}
        backgroundColor="#49A6FC"
        barStyle="light-content"
      />
      <Navigator/>
      </>
  );
};



export default App;
