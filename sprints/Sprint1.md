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

Now, in `src/App.js`, add the following routes: 

```js
import React, { Component } from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Todos from './components/TodosContainer';

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
We use the `Switch` component from `react-router-dom` to tell our app to switch between different routes, depending on the URL. Then, we use the `Route` component, also given to us by `react-router-dom` to create a route for the root path(`'/'`). We also establish that the component that should be rendered here is a `Home` component. There is a second route for the path `/todos`, which should route to a `TodosContainer` component.

Take some time now to create a `Home` component with some dummy text inside (e.g. "I am the Home page").
Do the same for the `TodosContainer` component (e.g. "I am the TodosContainer page").

> Something that's weird is that we imported `React` from `'react'` but then we imported `{Route}` from `'react-router-dom'`. What's with the curly braces? In the latter case we're actually only importing a specific module of the `react-router-dom` and name spacing it within `Route` If we had omitted the curly braces, it would have grabbed all of `react-router-dom`'s functionality. Check out the [react-router-dom source code](https://github.com/reactjs/react-router-dom) and we can clearly see the Route is a module within react-router-dom


Great, we should now be able to see our `App` component's "Hello world" show up!



### A Simple Component
Before we add another route, let's change the header to be more applicable and make it its own component.

In `src/App.js`:

```js
import React, { Component } from 'react';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hello, and welcome! I am a heading tag in App.js! Have a great day!</h1>
      </div>
    );
  }
}

export default App;
```

This will immediately error our code base out, why? (ST-WG)

That's right, we don't actually have that folder let alone the file within it. Let's create those things and define our component within it.

```bash
$ mkdir src/components
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
        <h1><Link to={'/todos'}>React Todos</Link></h1>
      </header>
    )
  }
}

export default Header
```

In this file, we've grabbed some dependencies and stored them in variables and then defined a component. The `Link` component is exactly what you think it is, a link to another route. You can think of it as `data-ui-sref` in angular or even an `href` in plain 'ol HTML.

Awesome! We now have a header showing up! Let's click on the link.

We get directed to an empty page, which makes sense – our `config/routes.js` only has a reference to `'/'` and nothing else. We'll fix that by adding the first parts of our app's main functionality. But before that... let's talk about containers.
