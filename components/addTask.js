/*
* dependencias
*/
import React from 'react';

export default class AddTask extends React.Component{
  constructor(){
    super();
    this.getText=this.getText.bind(this);

  }

getText(e){
  e.preventDefault();
  var text=e.target.querySelector('input');
  var value=text.value; text.value='';
  this.props.renderList(value);
}
render(){
  return  <form className="addTask" onSubmit={this.getText}>
              <input type="text" placeholder="To do !!!" className="input" />
          </form>
}
}
