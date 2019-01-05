import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BarList from './BarList';

class Favorite extends Component {

  state = { favorites: [] }

  markFavorite() {
    this.setState({ favorites: this.state.favorites.concat(bars.id) })
  }
  render() {
    return (
      <TouchableOpacity>
        <Icon
          raised
          name={this.state.favorites ? 'favorite-border' : 'favorite'}
          color="#cc0000"
          style={{ fontSize: 24 }}
        />
      </TouchableOpacity>
    );
  }
}

export default Favorite;
