import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      submittedText: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { inputText } = this.state;
    this.setState({ submittedText: inputText, inputText: '' });
  }

  render() {
    const { inputText, submittedText } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={inputText} onChange={this.handleInputChange} />
          <button type="submit">Submit</button>
        </form>
        <p>{submittedText}</p>
      </div>
    );
  }
}

export default MyComponent;
