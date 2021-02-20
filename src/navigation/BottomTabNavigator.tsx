import { Entypo, AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/homeScreem';
import MarketScreen from '../screens/marketScreen';
import PortfolioScreen from '../screens/portfolioScreen';
import ProfileScreen from '../screens/profileScreen';
import RankingsScreen from '../screens/rankingScreen';
import { BottomTabParamList } from '../../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="piechart" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="line-chart" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Rankins"
        component={RankingsScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="leaderboard" size={35} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={30} color={color} />,
        }}
      />      
    </BottomTab.Navigator>
  );
}
