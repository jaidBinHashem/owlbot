import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SearchScreen from './app/screens/search';
import FavScreen from './app/screens/fav';
import store from './app/redux';
import {Provider} from 'react-redux';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: () => {
                let iconName;

                if (route.name === 'Search') {
                  iconName = 'search';
                } else if (route.name === 'Fav') {
                  iconName = 'heart';
                }
                return <Icon name={iconName} type="ionicon" color="#517fa4" />;
              },
            })}>
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Fav" component={FavScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
