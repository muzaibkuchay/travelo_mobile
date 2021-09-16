import React from 'react';
import {Text, AsyncStorage, View} from 'react-native';
import MyStack from './login/index';
import MyTab from './home/index';

const MyAppNavigator = (props) => {
  return <MyStack />;
};

export default MyAppNavigator;
