import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Details = () => {
  return (
    <TouchableOpacity>
      <Icon
        name="info-circle"
        style={{ fontSize: 24 }}
      />
    </TouchableOpacity>
  );
};

export default Details;
