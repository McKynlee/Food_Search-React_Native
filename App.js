// Set up the navigation we chose to use:
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { StatusBar } from 'expo-status-bar';

import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);


