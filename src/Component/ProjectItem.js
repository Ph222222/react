import React, { Component } from 'react';



class ProjectItem extends Component {
  render() {
    console.log(this.props.project.title);
    console.log('hii');
    return (
         
      <li className="Project">
       
        {this.props.project.title}
       
      </li>
    );
  }
}

export default ProjectItem;