import React, { Component } from 'react';


 /* 1 class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {name : 'Ivan', age : 25};
  }


render() {
  return (
    <div>
      <p>Name : {this.state.name} &nbsp; Age : {this.state.age}</p>
    </div>
  );
 }
}


export default MyComponent;
*/
 /* 2 class MyButton extends React.Component {
  showMessage() {
    alert('hello');
  }

  render() {
    return (
      <button onClick={this.showMessage}>Click me</button>
    );
  }
}

export default MyButton;
*/

/* 3 class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Ivan', age: 25 };
  }

  showName() {
    alert(this.state.name);
  }

  render() {
    return (
      <button onClick={this.showName}>Click me</button>
    );
  }
}

export default MyButton;
*/

/* 4 class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Ivan', age: 25 };
  }

  handleClick = () => {
    this.setState({ name: 'Kolya', age: 30 });
  }

  render() {
    return (
      <div>
        <div>
          name: {this.state.name}, age: {this.state.age}
        </div>
        <button onClick={this.handleClick}>Update State</button>
      </div>
    );
  }
}

export default MyButton;
*/


/* 5 class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true, name: 'Ivan' };
  }

  render() {
    const greeting = this.state.show ? `Hello, ${this.state.name}!` : `Bye, ${this.state.name}!`;

    return (
      <div>
        <p>{greeting}</p>
      </div>
    );
  }
}

export default MyComponent;
*/


/* 6 class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Ivan', age: 25 };
  }

  handleClick = () => {
    this.setState({ name: 'Ivan', age: 25 });
  }

  render() {
    return (
      <div>
        <p>name: {this.state.name}, age: {this.state.age}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
*/


/* 7 class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ivan',
      age: 25,
      showParagraph: false
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      showParagraph: !prevState.showParagraph
    }));
  }

  render() {
    const { name, age, showParagraph } = this.state;

    return (
      <div>
        {showParagraph && (
          <p>name: {name}, age: {age}</p>
        )}
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
*/

/* 8 class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ivan',
      age: 25,
      showParagraph: false,
      buttonText: 'show'
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      showParagraph: !prevState.showParagraph,
      buttonText: prevState.showParagraph ? 'show' : 'hide'
    }));
  }

  render() {
    const { name, age, showParagraph, buttonText } = this.state;

    return (
      <div>
        {showParagraph && (
          <p>name: {name}, age: {age}</p>
        )}
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}

export default MyComponent;
*/


/* 9 class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Kolya', 'Vasya', 'Petya']
    };
  }

  render() {
    const { names } = this.state;

    return (
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    );
  }
}

export default MyComponent;
*/

/* 10 class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Kolya', 'Vasya', 'Petya']
    };
  }

  render() {
    const { names } = this.state;

    return (
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name} - {index + 1}
          </li>
        ))}
      </ul>
    );
  }
}

export default MyComponent;
*/

