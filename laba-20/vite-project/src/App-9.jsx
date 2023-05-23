import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
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
        <select value={selectedOption} onChange={this.handleOptionChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        {selectedOption === 'option1' && <p>Paragraph 1</p>}
        {selectedOption === 'option2' && <p>Paragraph 2</p>}
        {selectedOption === 'option3' && <p>Paragraph 3</p>}
      </div>
    );
  }
}

export default MyComponent;
