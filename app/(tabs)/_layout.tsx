
import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import LoginScreen from '../../screens/LoginScreen';
import { Platform, Text, TextInput } from 'react-native';
import { useFonts } from 'expo-font';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('../../assets/fonts/Lato-Light.ttf'),
    'Lato-Black': require('../../assets/fonts/Lato-Black.ttf'),
  });
  // Para aplicar la fuente globalmente, usa componentes personalizados AppText y AppTextInput en vez de modificar defaultProps.

  if (!fontsLoaded) return null;

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ventas"
        options={{
          title: 'Ventas',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="stock"
        options={{
          title: 'Stock',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cube.box.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="miPerfil"
        options={{
          title: 'Mi Perfil',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.crop.circle.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
