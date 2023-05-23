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
        <label>
          <input type="checkbox" checked={isChecked} onChange={this.handleCheckboxChange} />
          Show Paragraph
        </label>
        {isChecked && <p>This is the paragraph.</p>}
      </div>
    );
  }
}

export default MyComponent;
