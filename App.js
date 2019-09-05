'use strict';
import {
  AppRegistry
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// import { StackNavigator } from 'react-navigation';
import SignIn from './components/SingIn.js';
import SignUp from './components/SignUp.js';
import Rooms from './components/Rooms.js';
import Messages from './components/Messages.js';

const RootNavigator = createStackNavigator(
  {
    SignIn: { name: 'SignIn', screen: SignIn },
    SignUp: { name: 'SignUp', screen: SignUp },
    Rooms: { name: 'Rooms', screen: Rooms },
    Messages: { name: 'Messages', screen: Messages}
  },
  { headerMode: 'screen' }
);

AppRegistry.registerComponent('RNFirebaseChat', () => RootNavigator);
export default createAppContainer(RootNavigator);
