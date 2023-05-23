import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      lastName: '',
      firstName: '',
      patronymic: ''
    };
  }

  handleInputChange = (event) => {
    const fullName = event.target.value;
    const nameComponents = fullName.split(' ');

    const lastName = nameComponents.length > 0 ? nameComponents[0] : '';
    const firstName = nameComponents.length > 1 ? nameComponents[1] : '';
    const patronymic = nameComponents.length > 2 ? nameComponents[2] : '';

    this.setState({
      fullName: fullName,
      lastName: lastName,
      firstName: firstName,
      patronymic: patronymic
    });
  }

  render() {
    const { fullName, lastName, firstName, patronymic } = this.state;

    return (
      <div>
        <input type="text" value={fullName} onChange={this.handleInputChange} />
        <p>Last Name: {lastName}</p>
        <p>First Name: {firstName}</p>
        <p>Patronymic: {patronymic}</p>
      </div>
    );
  }
}

export default MyComponent;
