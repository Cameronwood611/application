import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: '#003471',
    borderWidth: 2,
    borderColor: '#007aff',
  },
  textStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#fff',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10

  }
};

export default Button;
