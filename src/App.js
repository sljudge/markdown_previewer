import React from 'react';
import './App.css';

const marked = require('marked')
marked.setOptions({sanitize: true})

const Preview = (props) =>{
  let parsed = marked(props.input)  
  return(
    <div dangerouslySetInnerHTML={{ __html: parsed }}/>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "# This is a header\r \r ## This is a sub-header \r\rWhen writing you can make text bold like **this**. \r\rThis is a [link](https://www.freecodecamp.com) \r\rYou can add inline code like this: `<div></div>` \r\rA code block looks like this: \r\r```\rfunction anotherExample(firstLine, lastLine) {\r   if(firstLine == '```' && lastLine == '```') {\r     return multiLineCode;\r }}\r``` \rLists are created like this: \r- List item 1 \r - List item 2 \r\rThis is how you make a block quote: \r> Insert block quote here \r\rImages are inserted like this: \r![React Logo w/ Text](https://goo.gl/Umyytc)"
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      input: event.target.value,
    })
  };
  render() {
    return (
      <div>
        <div id='page' className='container'>
          <div id='editor-container' className='container'>
            <textarea id='editor' onChange={this.handleChange} value={this.state.input} placeholder='Insert your markdown text here'></textarea>
          </div>
          <div id='preview-container' className='container'>
            <Preview input={this.state.input}/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;

