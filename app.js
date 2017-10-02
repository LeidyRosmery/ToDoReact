import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './components/toDo';
var tasksList=["Despertar a las 8:00 am"];
ReactDOM.render(
  <ToDo tasks={tasksList} />,document.getElementById('container')
);
