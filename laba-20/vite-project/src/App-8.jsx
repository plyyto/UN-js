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
          <option value="unchecked">Unchecked</option>
          <option value="checked">Checked</option>
        </select>
        <input
          type="checkbox"
          checked={selectedOption === 'checked'}
          readOnly
        />
      </div>
    );
  }
}

export default MyComponent;
