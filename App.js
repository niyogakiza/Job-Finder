import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';


import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

import store from './store';



export default class App extends React.Component {
  render() {
    const MainNavigator  = TabNavigator({
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        main:{
          screen: TabNavigator({
              map: { screen: MapScreen },
              deck: { screen: DeckScreen },
              review: {
                screen: StackNavigator({
                    review: { screen: ReviewScreen },
                    settings: { screen: SettingsScreen }
                })
              }
          })
        }
    }, {
        navigationOptions:{
            tabBarVisible: false 
        },
        lazy: true
    });

    return (
        <Provider store={store}>
          <View style={styles.container}>
            <MainNavigator />
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//Expo.registerRootComponent(App);


