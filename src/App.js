import React, { Component } from 'react';
import Projects from './Component/Projects'
import AddProject from './Component/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      project: []
    }
  }
  
  componentWillMount(){
     this.setState( { project: [
              {
                title: 'B',
                category: 'W'
              },
              {
                title: 'A',
                category: 'X'
              },
              {
                title: 'C',
                category: 'Z'
              }
            ]}       
     );
  }
  handleAddProject(project){
     console.log(project);
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject = {this.handleAddProject.bind(this.props.project)}></AddProject>
        <Projects projects = {this.state.project}/>
      </div>
    );
  }
}

export default App;
