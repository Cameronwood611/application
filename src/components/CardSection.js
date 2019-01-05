import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.sectionStyle}>{props.children}</View>
  );
};

const styles = {
  sectionStyle: {
    padding: 5,
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    flex: 1
  }
};

export default CardSection;
