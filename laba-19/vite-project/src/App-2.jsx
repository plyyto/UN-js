import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Kolya', 'Vasyl', 'Petro', 'Ivan', 'Dmytro'],
      newItem: ''
    };
  }

  handleButtonClick = () => {
    const { names, newItem } = this.state;
    const updatedNames = [...names, newItem];

    this.setState({
      names: updatedNames,
      newItem: ''
    });
  }

  handleInputChange = (event) => {
    this.setState({ newItem: event.target.value });
  }

  render() {
    const { names, newItem } = this.state;

    return (
      <div>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        <div>
          <input type="text" value={newItem} onChange={this.handleInputChange} />
          <button onClick={this.handleButtonClick}>Add Item</button>
        </div>
      </div>
    );
  }
}

export default MyComponent;
