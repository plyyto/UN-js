import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      options: ['Option 1', 'Option 2', 'Option 3'],
    };
  }

  handleInputChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  }

  handleButtonClick = () => {
    const { inputValue, options } = this.state;
    const updatedOptions = [...options, inputValue];
    this.setState({ options: updatedOptions, inputValue: '' });
  }

  render() {
    const { inputValue, options } = this.state;

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleButtonClick}>Add Option</button>
        <select>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default MyComponent;
