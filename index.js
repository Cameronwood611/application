import React from 'react';
import { AppRegistry, View } from 'react-native';
import SearchBars from './src/components/SearchBars';
import BarList from './src/components/BarList';


// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <SearchBars />
    <BarList />
  </View>
  );
// Render the component to the simulator
AppRegistry.registerComponent('cover', () => App);
