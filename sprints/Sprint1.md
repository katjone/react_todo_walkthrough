## Sprint 1: React Router

We're going to use React Router today to introduce it as a concept. However, it isn't strictly necessary for this application. We're really just going for exposure here. There's a lot to learn about react router and we'll just be scratching the surface. If you want to dive deeper, checkout [this tutorial](https://github.com/reactjs/react-router-tutorial)

We need React Router in the same way that we needed Angular routers. We need a way to link to various urls to components in our application. Because our application will be a SPA, we still want to preserve different application-states via the url. This Todo app's application-states (not to be confused with component state) will just be the root url and a url to all todos(`/` and `/todos`)

### Creating Routes
It's great, Routes are just react Components as well! Since we've installed the `react-router-dom` dependency, we'll start by defining our home route.

Let's update our `index.js` to use a BrowserRouter to wrap our `App` Component. In `index.js`:


```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'))
```

Now, in `src/App.js`, let's add 2 routes for '/' and '/todos': 

```js
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Todos from './containers/TodosContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/todos' component={ TodosContainer }/>
        </Switch>
      </div>
    );
  }
}

export default App;
```

We use the `Switch` component from `react-router-dom` to tell our app to switch between different routes, depending on the URL. Then, we use the `Route` component, also given to us by `react-router-dom` to create a route for the root path(`'/'`). We also establish that the component that should be rendered here is a `Home` component. There is a second route for the path `/todos`, which should route to a `TodosContainer` component.

This will immediately ERROR our code out, because we don't actually have those files with those components defined. Take some time now to create a `Home` component with some dummy text inside (e.g. "I am the Home page"). Do the same for the `TodosContainer` component (e.g. "I am the TodosContainer page").

```bash
$ mkdir src/components
$ touch src/components/Home.js
$ mkdir src/containers
$ touch src/containers/TodosContainer.js
```
We will go over why `TodosContainer` is in a different `src/containers/` directory, vs the `src/components/` directory we've already created.

> Something that's weird is that we imported `React` from `'react'` but then we imported `{Route}` from `'react-router-dom'`. What's with the curly braces? In the latter case we're actually only importing a specific module of the `react-router-dom` and name spacing it within `Route` If we had omitted the curly braces, it would have grabbed all of `react-router-dom`'s functionality. Check out the [react-router-dom source code](https://github.com/reactjs/react-router-dom) and we can clearly see the Route is a module within react-router-dom


Great, we should now be able to see our `Home` component's "I am the Home page" show up on `localhost:3000`! Going to `localhost:3000/todos` should show "I am the TodosContainer page".



### A Simple Component
Before we add another route, let's create a `Header` component to show up across all of our app's pages. 

In `src/App.js`:

```js
import React, { Component } from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Todos from './containers/TodosContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/todos' component={ TodosContainer }/>
        </Switch>
      </div>
    );
  }
}

export default App;
```

This will immediately error our code base out, why? (ST-WG)

That's right, we don't actually have a `Header` component defined in our codebase. Let's create it:

```bash
$ touch src/components/Header.js
```

In `src/components/Header.js`:

```js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
        <Link to={'/'}>Home</Link>
        <Link to={'/todos'}>Todos</Link>
      </header>
    )
  }
}

export default Header
```

In this file, we've grabbed some dependencies and stored them in variables and then defined a component. The `Link` component is exactly what you think it is, a link to another route. You can think of it as `data-ui-sref` in angular or even an `href` in plain 'ol HTML.

Awesome! We now have a header showing up! Click between the `Home` and `Todos` links. It should route to your `Home` and `TodosContainer` components.

Before moving on, let's refactor so all our routes live neatly squared away in a separate file:

```bash
mkdir src/config/
touch src/config/routes.js
```

In your `config/routes.js` file, copy and paste the routes from your `App` component:

```js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import TodosContainer from '../containers/TodosContainer';

export default (
	<Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/todos' component={ TodosContainer }/>
  </Switch>
)
```

Then, edit your `App.js` file to no longer have hard-coded routes, and to reference the routes in your `config/routes.js` file instead:

```js
import React, { Component } from 'react';
import Header from './components/Header';
import MyRoutes from './config/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        { MyRoutes }
      </div>
    );
  }
}

export default App;
```

Great! Now, let's talk about containers.
