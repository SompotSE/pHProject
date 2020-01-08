import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import DeviceScreen from './DeviceScreen';
import ReportScreen from './ReportScreen';
import ProfileScreen from './ProfileScreen';
import ProfileEditScreen from './ProfileEditScreen';
import EditdeviceScreen from './EditdeviceScreen';
import ScanScreen from './ScanScreen';
import DevicedataScreen from './DevicedataScreen';

import TitleScreen from './TitleScreen';
import ShowdeviceScreen from './ShowdeviceScreen';

import TestScreen from './TestScreen';
import TestmapScreen from './TestmapScreen';


const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  Device: {
    screen: DeviceScreen,
    navigationOptions: {
      header: null,
    },
  },
  Report: {
    screen: ReportScreen,
    navigationOptions: {
      header: null,
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
    },
  },
  ProfileEdit: {
    screen: ProfileEditScreen,
    navigationOptions: {
      header: null,
    },
  },
  Scan: {
    screen: ScanScreen,
    navigationOptions: {
      header: null,
    },
  },
  Editdevice: {
    screen: EditdeviceScreen,
    navigationOptions: {
      header: null,
    },
  },
  Devicedata: {
    screen: DevicedataScreen,
    navigationOptions: {
      header: null,
    },
  },
  Title: {
    screen: TitleScreen,
    navigationOptions: {
      header: null,
    },
  },
  Showdevice: {
    screen: ShowdeviceScreen,
    navigationOptions: {
      header: null,
    },
  },
  Test: {
    screen: TestScreen,
    navigationOptions: {
      header: null,
    },
  },
  Testmap: {
    screen: TestmapScreen,
    navigationOptions: {
      header: null,
    },
  },
}, { initialRouteName: 'Testmap' });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      // <RootStack></RootStack>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      </View>
    );
  }
}

export default createAppContainer(RootStack);