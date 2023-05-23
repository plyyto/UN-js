import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: '',
    };
  }

  handleColorChange = (event) => {
    const selectedColor = event.target.value;
    this.setState({ selectedColor });
  }

  render() {
    const { selectedColor } = this.state;

    return (
      <div>
        <select value={selectedColor} onChange={this.handleColorChange}>
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <p style={{ color: selectedColor }}>This is a colored paragraph</p>
      </div>
    );
  }
}

export default MyComponent;
