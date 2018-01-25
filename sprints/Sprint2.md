## Sprint 2: Containers

Writing a container is going to feel very similar to writing just another component. Remember that  React components should be FIRST: focused, independent, reusable, small, and testable. In order to help keep components slim, a good practice is to move as much of the business logic surrounding a component's state to a container component. We're going to put all that logic in this container. It will start out very similarly to our `Header` component, but end up much more complex.

Let's revise our `src/containers/TodosContainer.js` and replace the dummy text we had before with the following:

```js
import React, {Component} from 'react'

class TodosContainer extends Component {
  render(){
    return (
      <div className='todosContainer'>
        <h2>This is the todos container</h2>
      </div>
    )
  }
}

export default TodosContainer
```

Then we just have to update the routes in `src/config/routes.js`:

```js
//...
import TodosContainer from '../containers/TodosContainer'

export default (
  <Switch>
    <Route exact path='/' component={ Home } >
      <Route path='/todos' component={ TodosContainer }/>
    </Route>
  </Switch>
)
```

If we click on it we should totally see ..... nothing still. But no error now! Because our `/todos` is nested within our `'/'` route, our `App` Component needs to know what to render. We do this by adding one line of code to our `src/App.js`:

```js
render() {
  return (
    <div className="App">
      <Header />
      {this.props.children}
    </div>
  );
}
```

Great everything works!

### PAUSE!

Everything up to this point, is most of what you need to know about using react for a website NOT using a back end. Just add css through index.css and you're good to go! Here's some basic style:

```css
body {
  margin: 0;
  padding: 0;
  font-family: "Brush Script MT", cursive;
}

header, .todos {
  text-align: center
}

.todosContainer {
  width: 60%;
  margin: auto;
}

h2 {
  padding-bottom: .5em;
  margin-bottom: .5em;
}

.incomplete h2{
  border-bottom: 3px solid red;
}

h1, h2{
  font-family: "Brush Script MT", cursive;
}

p {
  font-family: "Brush Script MT", cursive;
  font-size: 2em;
}

.todoForm {
  clear:both;
  text-align: center;
}

span.deleteButton, span.toggleButton {
  padding-left: 1em;
}

.deleteButton{
  color: red;
}

.createForm {
  padding-top: 3em;
  padding-bottom: 3em;
  margin: auto;
  width: 58%;
}

```
