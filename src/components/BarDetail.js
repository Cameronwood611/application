import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Favorite from './Favorite';
import Details from './Details';

const BarDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
          <View>
            <Image
              style={styles.imageStyle}
              source={require('../img/Rounders.jpg')}
            />
          </View>
          <View>
            <Text style={{ color: 'orange', marginTop: 5 }}>Different cover fee?</Text>
            <Button>Tell us!</Button>
          </View>
        </View>
      </CardSection>
      <CardSection>
        <View>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>{props.barObject.name}</Text>
          <Text>21 & Over: {props.barObject.over}</Text>
          <Text>Under: {props.barObject.under}</Text>
          <Text>Hours: {props.barObject.hours}</Text>
          <Text>Location: {props.barObject.location}</Text>
          <Text>Event: {props.barObject.event}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View>
          <Favorite />
          <Details />
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  leftContainer: {
  },
  imageStyle: {
    height: 150,
    width: 100
  },
  centerContainer: {
  },
  rightContainer: {
  }
};

export default BarDetail;
