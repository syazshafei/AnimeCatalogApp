import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Airing from './screens/Home/Status/Airing';
import Complete from './screens/Home/Status/Complete';
import Upcoming from './screens/Home/Status/Upcoming';
import Favourite from './screens/Favourite';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const handleTabStyling = (route, focused, color, size) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'Airing') {
    iconName = focused ? 'tv' : 'tv-outline';
  } else if (route.name === 'Upcoming') {
    iconName = focused ? 'chevron-up' : 'chevron-up-outline';
  } else if (route.name === 'Complete') {
    iconName = focused ? 'checkmark-done' : 'checkmark-done-outline';
  }
  return <Ionicons name={iconName} size={size} color={color} />;
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return handleTabStyling(route, focused, color, size);
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Airing" component={Airing} />
      <Tab.Screen name="Upcoming" component={Upcoming} />
      <Tab.Screen name="Complete" component={Complete} />
    </Tab.Navigator>
  );
};

const App = () => {
  const queryClient = new QueryClient();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeTabs} />
            <Drawer.Screen name="Favourite" component={Favourite} />
          </Drawer.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
