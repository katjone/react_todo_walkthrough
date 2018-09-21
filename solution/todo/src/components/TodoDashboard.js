import React, {Component} from 'react'

class TodoDashboard extends Component {
  render(){
      return (
        <div className="count-wrapper">
          <p>You have <span className="count">{this.props.todoCount} todos</span> left to complete.</p>
          <button id="deleteTasks" className="btn delete">Delete Tasks</button>
          <button id="clearCompleted" onClick={this.props.clearCompleted} className="btn">Clear Completed</button>			
        </div>
      )
    }
}

export default TodoDashboard


