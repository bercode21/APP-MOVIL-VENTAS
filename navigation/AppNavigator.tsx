import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SalesScreen from '../screens/SalesScreen';
import StockScreen from '../screens/StockScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#007aff',
      tabBarInactiveTintColor: '#888',
      tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 0 },
    }}
  >
    <Tab.Screen name="Inicio" component={HomeScreen} />
    <Tab.Screen name="Ventas" component={SalesScreen} />
    <Tab.Screen name="Stock" component={StockScreen} />
    <Tab.Screen name="MiPerfil" component={ProfileScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  // Aquí deberías manejar el estado de autenticación
  const isLoggedIn = true; // Cambia esto por tu lógica real
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTabs /> : <LoginScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
