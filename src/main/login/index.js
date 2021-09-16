import Login from '../login/Login';
import ForgotPassword from './ForgotPassword';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const Stack = createStackNavigator(
  {
    Login,
    ForgotPassword,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(Stack);

