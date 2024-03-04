import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Header from "./src/components/Header";
import Albumlist from './src/components/AlbumList';

const App = () => {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Header />
      <Albumlist />
    </SafeAreaView>
  );
};

export default App;