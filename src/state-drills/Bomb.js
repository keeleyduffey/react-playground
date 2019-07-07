import React from 'react';

class Bomb extends React.Component {
	constructor(props) {
	  super(props)
	  this.state = { count: 0 };
	  // console.log('constructor')
	}
	componentDidMount() {
	  // console.log('componentDidMount')
	  this.interval = setInterval(() => {
	    const newCount = this.state.count + 1
	    this.setState({
	      count: newCount
	    })
	  }, 1000)
	}
	componentWillUnmount() {
	  clearInterval(this.interval)
	}
	render() {
		console.log(this.state.count);
	  let text;
	  if (this.state.count >= 8) {
	  	clearInterval(this.interval)
	  	text = 'BOOM!';
	  } else if (this.state.count % 2 === 0) {
	  	text = 'tick';
	  } else {
	  	text = 'tock';
	  }

	  return (
	    <div>{text}</div>
	  )
	}
}

export default Bomb