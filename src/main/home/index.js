import * as React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './Home';
import Profile from './Profile';
import FindMe from './FindMe';

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: <Octicons name="home" color={'#FFF'} size={26} />,
      },
    },
    FindMe: {
      screen: FindMe,
      navigationOptions: {
        tabBarLabel: 'Find Me',
        tabBarIcon: <AntDesign name="find" color={'#FFF'} size={22} />,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: <Feather name="user" color={'#FFF'} size={26} />,
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#05A357',
    inactiveColor: '#FFF',
    barStyle: {backgroundColor: '#000'},
  },
);

// export default function MyTab(props) {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="#05A357"
//       inactiveColor="#FFF"
//       barStyle={{backgroundColor: '#000'}}>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color}) => (
//             <Octicons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Find Me"
//         component={FindMe}
//         options={{
//           tabBarLabel: 'Find Me',
//           tabBarIcon: ({color}) => (
//             <AntDesign name="find" color={color} size={22} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color}) => (
//             <Feather name="user" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
