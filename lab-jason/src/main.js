import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
const faker = require('faker');
const cowsay = require('cowsay');


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content: cowsay.say({
        text: 'click the button for more cow wisdom!',
      })
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    console.log(e);
    console.log('clicked');
    this.setState(state => {
      console.log(state);
      return{
        content: cowsay.say({
          text: faker.lorem.words(),
        })
      };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>What does the Cow Say?</button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}
console.log(App);
ReactDOM.render(<App />, document.getElementById('root'));
