import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: ['New York', 'London', 'Paris', 'Tokyo'],
      selectedCity: ''
    };
  }

  handleCityChange = (event) => {
    const selectedCity = event.target.value;
    this.setState({ selectedCity });
  }

  render() {
    const { cities, selectedCity } = this.state;

    return (
      <div>
        <select value={selectedCity} onChange={this.handleCityChange}>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        <p>Selected City: {selectedCity}</p>
      </div>
    );
  }
}

export default MyComponent;
