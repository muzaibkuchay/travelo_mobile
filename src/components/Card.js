import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';

export default function ImageCard({props, data}) {
  return (
    <Card>
      <Card.Cover
        style={{width: '94%', alignSelf: 'center', borderRadius: 3}}
        source={data.image}
      />
      <Card.Actions>
        <Button color={'#000'}>Share</Button>
        <Button color={'#05A357'}>Explore</Button>
      </Card.Actions>
      <Card.Content>
        <View style={{flexDirection: 'row'}}>
          <Title>{data.name}</Title>
          <Title
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 10,
              paddingLeft: 4,
            }}>
            {data.distance} km
          </Title>
        </View>

        <Paragraph style={{fontFamily: 'OpenSans-Light'}}>
          {data.description}
        </Paragraph>
      </Card.Content>
    </Card>
  );
}
