import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { who: 'world' }
  }
 //  handleButtonClick = (string) => {
	//   console.log('props in handleButtonClick', this.props)
 //    console.log('state in handleButtonClick', this.state)
 //    console.log(string);
	//   const newText = string
	//   // this.setState({
	//   //   who: newText
	//   // })
	// }
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>

        <button onClick={() => this.setState({who:'world'})}>
          World
        </button>
        <button onClick={() => this.setState({who:'friend'})}>
          Friend
        </button>
        <button onClick={() => this.setState({who:'React'})}>
          React
        </button>
      </div>
    )
  }
}

export default HelloWorld
