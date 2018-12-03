import React, { Component } from 'react';
import uuid from 'uuid';
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
    this.getToDOs();
     this.setState( { project: [
              {
                id:uuid.v1(),
                title: 'B',
                category: 'W'
              },
              {
                id:uuid.v1(),
                title: 'A',
                category: 'X'
              },
              {
                id:uuid.v1(),
                title: 'C',
                category: 'Z'
              }
            ]}       
     );
  }

  getToDOs(){

  }
  componentDidMount(){
    this.getToDOs();
  }
  handleAddProject(project){
     console.log(project.id);
     let projects = this.state.project;
     projects.push(project);
     this.setState ({project:projects});
  }

  handleDeleteProject(project){
    let projects = this.state.project;
    let index = projects.findIndex(x=> project.id);
    console.log('index' + index);
    projects.splice(index,1);
    this.setState ({project:projects});
 }

  render() {
    return (
      <div className="App">
        <AddProject addProject = {this.handleAddProject.bind(this)}></AddProject>
        <Projects projects = {this.state.project} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
