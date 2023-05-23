import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Kolya', 'Vasyl', 'Petro', 'Ivan', 'Dmytro']
    };
  }

  handleRemoveClick = (index) => {
    this.setState((prevState) => ({
      names: prevState.names.filter((_, i) => i !== index)
    }));
  }

  render() {
    const { names } = this.state;

    return (
      <div>
        <ul>
          {names.map((name, index) => (
            <li key={index}>
              {name}
              <button onClick={() => this.handleRemoveClick(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MyComponent;
