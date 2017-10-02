import React from 'react';
import addTask from './addTask';

export default class ListTask extends React.Component{
  constructor()
  { super();
    this.remove=this.remove.bind(this);
      this.complete=this.complete.bind(this);
  }

  complete(elemento){
  var value=elemento.target.parentNode.querySelector('span');
  value.classList.toggle("complete");
  console.log('complete');
}
  remove(elemento){
    var value=elemento.target.parentNode.querySelector('span').innerText;
    console.log(value);
    this.props.remove(value);
  }
  render(){
  var items=this.props.tasks.map((e,indice)=>{
    return  <li key={indice} className="taskList btn-group btn-groupTask">
              <span className="task">{e}</span>
              <button className="btn btn-complete btn-default" onClick={this.complete}>b</button>
              <button className="btn btn-delete btn-default" onClick={this.remove}>X</button>
          </li>
  });
  return <div className="tasks">
              <ul className="container-task">
                  {items}
              </ul>
          </div>
  }
}
