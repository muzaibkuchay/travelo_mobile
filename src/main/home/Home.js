import React from 'react';
import {View, ScrollView, FlatList, Text} from 'react-native';
import Search from '../../components/Search';
import ImageCard from '../../components/Card';

const data = [
  {
    name: 'Dalgate',
    description:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    distance: 26,
    image: require('../../../assets/images/img.jpeg'),
  },
  {
    name: 'Boulevard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    distance: 29,
    image: require('../../../assets/images/img2.jpeg'),
  },
  {
    name: 'Nishat',
    description:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    distance: 33,
    image: require('../../../assets/images/img3.jpeg'),
  },
  {
    name: 'Dhodpathri',
    description:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    distance: 37,
    image: require('../../../assets/images/img5.jpeg'),
  },
  {
    name: 'Pahalgam',
    description:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    distance: 107,
    image: require('../../../assets/images/img6.jpeg'),
  },
  {
    name: 'Gulmarg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    distance: 57,
    image: require('../../../assets/images/img88.jpeg'),
  },
  {
    name: 'Gurez',
    description:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    distance: 222,
    image: require('../../../assets/images/imjj.jpeg'),
  },
];

export default function Home() {
  const renderItem = ({item}) => <ImageCard data={item} />;
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Search />
      <Text
        style={{
          fontFamily: 'OpenSans-Bold',
          fontSize: 16,
          paddingVertical: 10,
          paddingHorizontal: 8,
        }}>
        Top 10 places picked for you
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
// OpenSans-Bold
// OpenSans-Regular
