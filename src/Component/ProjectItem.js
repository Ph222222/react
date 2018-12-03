import React, { Component } from 'react';



class ProjectItem extends Component {

  deketeProject(id){
    console.log('tessss');
    this.props.onDelete(id);
  }

  render() {
    console.log(this.props.project.title);
    console.log('hii');
    return (
         
      <li className="Project">
       
        {this.props.project.title} <a href ="#" onClick={this.deketeProject.bind(this, this.props.project.id)}> X</a>
       
      </li>
    );
  }
}

export default ProjectItem;