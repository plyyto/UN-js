import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleInputChange = (event) => {
    const text = event.target.value;
    this.setState({ text });
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        <textarea value={text} onChange={this.handleInputChange} />
        <p>{text}</p>
      </div>
    );
  }
}

export default MyComponent;
