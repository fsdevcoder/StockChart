/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import Login from './components/Login';
import WatchList from './components/WatchList';
import StockChart from './components/StockChart';
import HeaderDropdown from './components/HeaderDropdown';
import { createStackNavigator, createAppContainer } from "react-navigation";
import NormalHeader from './components/NormalHeader';

const ACTIVE_TAB_COLOR = '#69A6F7'
const INACTIVE_TAB_COLOR = '#aaa'

const headerStyles = {
  headerTintColor: '#fff',
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: ACTIVE_TAB_COLOR,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    textAlign:'center',
    width:'100%',
    shadowOffset: { width: 0, height: 0 }
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: () => <Login/>,
      path: '/login',
      navigationOptions: () => {
        const title = "Home"

        return {
          headerTitle: () => <NormalHeader title={title} />,
          ...headerStyles
          
        }
      }
    },
    WatchList: {
      screen: () => <WatchList/>,
      path: '/watch',
      navigationOptions: () => {
        const title = "WatchList"

        return {
          headerTitle: () => <HeaderDropdown title={title} />,
          ...headerStyles
          
        }
      }
    },
    StockChart: {
      screen: () => <StockChart />,
      path: '/stochchart',
      navigationOptions: () => {
        const title = "StockChart"
        return {
          headerTitle: () => <NormalHeader title={title} />,
          ...headerStyles          
        }
      }
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);
