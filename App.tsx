import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import * as SplashScreen from 'expo-splash-screen';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppNavigator from './src/routes/AppNavigation';
import { AuthProvider } from './src/context/AuthContext';
import { StatusBar } from 'expo-status-bar';


SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_600SemiBold,
          Poppins_700Bold,
        });
        setFontsLoaded(true);
        Icon.loadFont();
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
      }
    };

    loadResources();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <StatusBar backgroundColor='#0A102D' style='light' />
      <AppNavigator />
    </AuthProvider>
  );
}