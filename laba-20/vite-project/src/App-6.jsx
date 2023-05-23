import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: [],
      currentText: ''
    };
  }

  handleTextChange = (event) => {
    const currentText = event.target.value;
    this.setState({ currentText });
  }

  handleButtonClick = () => {
    const { texts, currentText } = this.state;
    const updatedTexts = [...texts, currentText];
    this.setState({ texts: updatedTexts, currentText: '' });
  }

  render() {
    const { texts, currentText } = this.state;

    return (
      <div>
        <textarea value={currentText} onChange={this.handleTextChange} />
        <button onClick={this.handleButtonClick}>Add Text</button>
        <div>
          {texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default MyComponent;
