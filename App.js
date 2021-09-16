import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MyStack from './src/main/login/index';
import MyTab from './src/main/home/index';
import HomeStack from './src/main/home/HomeStack';

const Switch = createAppContainer(
  createSwitchNavigator(
    {
      MyStack,
      MyTab,
      HomeStack,
    },
    {
      initialRouteName: 'MyStack',
    },
  ),
);
export default Switch;
