import React from "react";
import './Accordion.css'

class Accordion extends React.Component {
  static defaultProps = { 
    sections: [] 
  };
  state = {
    currentSectionIndex: null
  };

  handleButtonClick = (index) => {
    this.setState({ currentSectionIndex: index })
  }
  renderItem(currentSection, index, currentSectionIndex) {
    return (
      <li key={index}> 
        <button  onClick={() => this.handleButtonClick(index)}>
          {currentSection.title}
        </button>
        {(index === currentSectionIndex) && <p>{currentSection.content}</p>}
      </li>
    )
  }
  
  render() {
    const { currentSectionIndex } = this.state
    const { sections } = this.props
    return (
      <ul className='content'>
        {sections.map((section, index) =>
          this.renderItem(section, index, currentSectionIndex)
        )}
      </ul>
    )
  }
}

export default Accordion;
