import Chat from '../home/Chat';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeTab from '../home/index';

const HomeStack = createStackNavigator(
  {
    HomeTab,
    Chat,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'HomeTab',
  },
);

export default createAppContainer(HomeStack);
