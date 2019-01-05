import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import BarDetail from './BarDetail';

//this will eventually pull from API/DB
const bars = [
  {
    id: 1,
    name: 'Rounders',
    over: '10',
    under: '20',
    hours: '4PM - 2AM',
    location: '113099 University Blvd South',
    event: 'None',
    image: ' '
  },
  {
    id: 2,
    name: 'Rhythm and Brews',
    over: 'Free',
    under: '10',
    hours: '5PM - 3AM',
    location: '2308 4th Street',
    event: 'Fraternity',
    image: ' '
  },
  {
    id: 3,
    name: 'Zydeco',
    over: 'Free',
    under: '10',
    hours: '6PM - 3AM',
    location: '2308 16th Street',
    event: 'Trotline',
    image: ' '
  }
];

class BarList extends Component {

  state = { Bars: [] };

  componentWillMount() {
    this.setState({ Bars: bars });
  }

  renderBars() {
    return this.state.Bars.map(bar =>
      <BarDetail key={bar.name} barObject={bar} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderBars()}
      </ScrollView>
    );
  }
}

export default BarList;
