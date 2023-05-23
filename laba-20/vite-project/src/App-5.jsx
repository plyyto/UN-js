import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
  }

  handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    this.setState({ selectedOption });
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <label>
          <input type="radio" value="1" checked={selectedOption === '1'} onChange={this.handleOptionChange} />
          Option 1
        </label>
        <label>
          <input type="radio" value="2" checked={selectedOption === '2'} onChange={this.handleOptionChange} />
          Option 2
        </label>
        <label>
          <input type="radio" value="3" checked={selectedOption === '3'} onChange={this.handleOptionChange} />
          Option 3
        </label>
        <p>Selected Option: {selectedOption}</p>
      </div>
    );
  }
}

export default MyComponent;
