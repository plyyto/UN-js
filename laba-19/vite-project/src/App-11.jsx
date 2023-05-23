import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      patronymic: '',
      fullName: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleButtonClick = () => {
    const { firstName, lastName, patronymic } = this.state;
    const fullName = `${firstName} ${lastName} ${patronymic}`;
    this.setState({ fullName });
  }

  render() {
    const { firstName, lastName, patronymic, fullName } = this.state;

    return (
      <div>
        <input type="text" name="firstName" value={firstName} onChange={this.handleInputChange} placeholder="First Name" />
        <input type="text" name="lastName" value={lastName} onChange={this.handleInputChange} placeholder="Last Name" />
        <input type="text" name="patronymic" value={patronymic} onChange={this.handleInputChange} placeholder="Patronymic" />
        <button onClick={this.handleButtonClick}>Show Full Name</button>
        <p>{fullName}</p>
      </div>
    );
  }
}

export default MyComponent;
