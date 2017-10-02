import React from 'react';
import ListTask from './listTask';
import AddTask from './addTask';
export default class ToDo extends React.Component{
  constructor(props){
    super();
    this.state={tasks:props.tasks};
    this.renderList=this.renderList.bind(this);
    this.removeTask=this.removeTask.bind(this);
  }
  renderList(text){
    var update=this.state.tasks; update.push(text);
  this.setState({tasks:update});
}
removeTask(text){
  var update=this.state.tasks; update.splice(update.indexOf(text),1);
  this.setState({tasks:update});

}
render(){
  return <div>
            <div className="title text-center">
                <h3>To-Do</h3></div>
            < AddTask renderList={this.renderList} />
            < ListTask tasks={this.state.tasks} remove={this.removeTask}/>
        </div>
  } }
