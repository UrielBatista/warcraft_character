import React from "react";
import { StatusBar } from 'react-native';

import { Domine_700Bold, Domine_400Regular, Domine_500Medium } from '@expo-google-fonts/domine';
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';
import { Background } from "./src/components/background";


import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Domine_700Bold,
    Domine_500Medium,
    Domine_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}