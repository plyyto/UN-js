import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      yearOfBirth: ''
    };
  }

  handleInputChange = (event) => {
    const age = event.target.value;
    const currentYear = new Date().getFullYear();
    const yearOfBirth = currentYear - parseInt(age);

    this.setState({
      age: age,
      yearOfBirth: yearOfBirth
    });
  }

  render() {
    const { age, yearOfBirth } = this.state;

    return (
      <div>
        <input type="number" value={age} onChange={this.handleInputChange} />
        <p>{yearOfBirth}</p>
      </div>
    );
  }
}

export default MyComponent;
