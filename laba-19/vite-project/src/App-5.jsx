import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  render() {
    const { inputText } = this.state;

    return (
      <div>
        <input type="text" value={inputText} onChange={this.handleInputChange} />
        <p>{inputText}</p>
      </div>
    );
  }
}

export default MyComponent;
