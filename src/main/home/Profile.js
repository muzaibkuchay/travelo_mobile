import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Profile() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.7}}>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          resizeMethod={'scale'}
          resizeMode={'cover'}
          source={require('../../../assets/images/omid.jpg')}>
          <Image
            style={{
              width: 65,
              height: 65,
              borderRadius: 35 / 2,
              borderWidth: 1,
              borderColor: '#FFF',
              elevation: 1,
            }}
            resizeMethod={'scale'}
            resizeMode={'cover'}
            source={require('../../../assets/images/dollar.jpg')}
          />
          <Text
            style={{
              color: '#FFF',
              fontFamily: 'OpenSans-Regular',
              fontSize: 20,
            }}>
            Seerat Bhat
          </Text>
          <Text
            style={{
              color: '#FFF',
              fontFamily: 'OpenSans-Regular',
              fontSize: 16,
            }}>
            Female
          </Text>
        </ImageBackground>
      </View>
      <View style={{paddingTop: 7}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 18,
            borderBottomWidth: 0.28,
            borderBottomColor: 'rgba(130, 130, 130, 0.4)',
            width: '97%',
            alignSelf: 'center',
          }}>
          <Ionicons
            name="ios-chatbubbles-outline"
            color={'#000'}
            size={21}
            style={{width: '6%'}}
          />
          <Text style={{paddingLeft: 16, fontFamily: 'OpenSans-Regular'}}>
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 18,
            borderBottomWidth: 0.28,
            borderBottomColor: 'rgba(130, 130, 130, 0.4)',
            width: '97%',
            alignSelf: 'center',
          }}>
          <FontAwesome
            name="user-o"
            color={'#000'}
            size={21}
            style={{width: '6%'}}
          />
          <Text style={{paddingLeft: 16, fontFamily: 'OpenSans-Regular'}}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 18,
            // borderBottomWidth: 0.28,
            // borderBottomColor: 'rgba(130, 130, 130, 0.4)',
            width: '97%',
            alignSelf: 'center',
          }}>
          <AntDesign
            name="logout"
            color={'#000'}
            size={19}
            style={{width: '6%'}}
          />
          <Text
            style={{
              width: '80%',
              paddingLeft: 19,
              fontFamily: 'OpenSans-Regular',
            }}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
