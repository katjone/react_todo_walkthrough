## Sprint 5: Deleting Todos

Deleting will work similarly with regard to passing state. Let's update the `Todo` component to contain a UI with which to delete a todo. In `src/components/Todo.js`:

```js
class Todo extends Component {
  render(){
    return(
      <p data-todos-index={this.props.todo.id}>
        <span>{this.props.todo.body}</span>
        <span
          className='deleteButton'
          onClick={() => this.props.onDeleteTodo(this.props.todo)}>
            (X)
        </span>
      </p>
    )
  }
}
```

We've added a span with an `X` in it. When it gets clicked it invokes the `onDeleteTodo` function defined on `props`. That means we need to pass `.onDeleteTodo` as `props` from the parent component of `Todos`. In `src/components/Todos.js`

```js
let todos = this.props.todos.map( (todo) => {
  return (
    <Todo
      key={todo._id}
      todo={todo}
      onDeleteTodo={this.props.onDeleteTodo}/>
  )
})
```

Looks like it's not defined here either but passed yet again from a parent container. Finally in the `src/containers/TodosContainer.js`:

```js
deleteTodo(todo) {
    TodoModel.delete(todo).then((res) => {
        let todos = this.state.todos.filter(function(todo) {
          return todo._id !== res.data._id
        });
        this.setState({todos})
    })
}
render(){
  return (
    <div className="todosComponent">
      <Todos
        todos={this.state.todos}
        onDeleteTodo={this.deleteTodo.bind(this)} />
      <CreateTodoForm
        createTodo={this.createTodo.bind(this)}
        />
    </div>
  )
}
```

Before we talk about the above code, lets look at what delete looks like in our `TodoModel`. In `src/models/Todo.js`:

```js
static delete(todo){
  let request = axios.delete(`https://super-crud.herokuapp.com/todos/${todo._id}`)
  return request
}
```

The `deleteTodo` takes the todo, passed from the child Component of `Todo` up through a chain of references. It deletes it with axios. Upon deletion, all todos are grabbed from the container state and filters out the one deleted, updates the state to have only the remaining todos.
