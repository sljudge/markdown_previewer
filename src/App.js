import React from 'react';
import './App.css';
import marked from 'marked'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    let parsed = marked(event.target.value)
    this.setState({
      input: event.target.value,
      output: parsed
    })
    console.log('input ', this.state.input)
  };
  render() {
    return (
      <div>
        <div id='page' className='container'>
          <div id='editor-container' className='container'>
            <textarea id='editor' onChange={this.handleChange} value={this.state.input} placeholder='Insert your markdown text here'></textarea>
          </div>
          <div id='preview-container' className='container'>
            <div dangerouslySetInnerHTML={{ __html: this.state.output }}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
