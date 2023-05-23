import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    this.setState({ isChecked });
  }

  render() {
    const { isChecked } = this.state;

    return (
      <div>
        <input type="checkbox" checked={isChecked} onChange={this.handleCheckboxChange} />
        <p>{isChecked ? 'Checked' : 'Not Checked'}</p>
      </div>
    );
  }
}

export default MyComponent;
