import React from 'react';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
import TaskList from './components/TodoList';

const tasks = [
  {
    name: 'Brush Teeth',
    id: 7000,
    completed: false
  },
  {
    name: 'Make Bed',
    id: 7001,
    completed: false
  },
  {
    name: 'Iron Clothes',
    id: 7003,
    completed: false
  },
  {
    name: 'Make Breakfast',
    id: 7004,
    completed: false
  },
  {
    name: 'Take Shower',
    id: 7005,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
    tasks
  }
}


  addTask = (taskName, e) => {
    console.log(e);
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    }
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    })
  }


  toggleCompleted = (taskId) => {
    const newTasks = this.state.tasks.map(task => {
      if (taskId === task.id) {
        return {
          ...task,
          completed: !tasks.completed
        }
      }
      else {return task}
    })
      this.setState({
        ...this.state,
        tasks: newTasks
      })
  }


  clearCompleted = () => {
    console.log('clearing completed tasks!')
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div className='container'>
        <h2>To-Do To-Day</h2>
        <TodoForm addTask={this.addTask}/>
        <TaskList tasks={this.state.tasks} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted}  />
        
      </div>
    );
  }
}

export default App;
