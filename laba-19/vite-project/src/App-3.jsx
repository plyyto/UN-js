import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Kolya', 'Vasyl', 'Petro', 'Ivan', 'Dmytro']
    };
  }

  handleRemoveClick = () => {
    this.setState((prevState) => ({
      names: prevState.names.slice(0, -1)
    }));
  }

  render() {
    const { names } = this.state;

    return (
      <div>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        {names.length > 0 && (
          <button onClick={this.handleRemoveClick}>Remove Last Item</button>
        )}
      </div>
    );
  }
}

export default MyComponent;
