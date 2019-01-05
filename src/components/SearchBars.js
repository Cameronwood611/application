import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SearchBars extends Component {
  state = { text: '' };
  render() {
    return (
      <View style={styles.searchBoxContainer}>
        <View style={styles.searchBox}>
          <Icon name="ios-search" style={{ fontSize: 24, marginLeft: 15 }} />
          <TextInput
            style={{ fontSize: 24, marginLeft: 10 }}
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            placeholder="Search Bars"
          />
        </View>
      </View>
    );
  }
}

const styles = {
  searchBoxContainer: {
    height: 100,
    backgroundColor: '#8cc8ff',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  searchBox: {
    height: 40,
    backgroundColor: '#fff',
    marginTop: 30,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center'
  }
};

export default SearchBars;
