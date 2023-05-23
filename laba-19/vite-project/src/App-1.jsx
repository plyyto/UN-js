import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Kolya', 'Vasyl', 'Petro', 'Ivan', 'Dmytro']
    };
  }

  render() {
    const { names } = this.state;

    return (
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    );
  }
}

export default MyComponent;
