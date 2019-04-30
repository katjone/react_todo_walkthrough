# React Todo

## Learning Objectives
- Build a todo app in React that persists with a backend
- Use React Router to deep link
- Use axios promise library to retrieve data from a back end
- Pass state from parent components to children as props
- Pass state from children components to their parents as arguments to functions

## Framing
For today, we'll be creating a Todo app in React.

We've learned a tremendous amount about object oriented structures for web development. And they were great. We have also dabbled a bit with feature-based separation of concerns. React's component model takes that separation further and reduces the potential of tight coupling that often attends object oriented. Think of the FIRST principles:

#### Focused

Components should do one thing and do it well. It takes some time for most developers coming from an OOP background to adjust to React's component-based architecture. At first, a dev from an OOP background may pack too much information into a component. This is a fine starting point, but as you progress you will get a better sense of how to minimize component code.

> Think back to the Post component from the intro's class.

#### Independent

Components should increase cohesion and reduce coupling. Behavior in one component should not impact the behavior of another. In other words, components should not rely on one another.

> But they should compliment one another, just like our Comment component did for Post in the intro's class.

#### Reusable

Components should be written in a way that reduces the duplication of code. Reusability keeps things DRY!

#### Small

Ideally, components should be short and condensed.

#### Testable

Because the same input will always produce the same output, components are easily unit testable.

## React Todo
Alright it's time to build! We're going to be building this application from scratch! It won't be exactly like the repo above, but it'll be pretty close and follow much of the same structure.

> If you get behind, all code written today will be in the lesson plan. The error messages you'll get in terminal and in the chrome dev tools from React are usually very accurate and helpful, so please utilize them. Please keep questions pertinent to content. We should also note that some of the code snippets will be repetitions to reiterate points of learning. Some of them might just be updates to existing files. Some of them might be brand new content you have to add all of.

[Sprint 0: Getting Started](sprints/Sprint0.md)

[Sprint 1: React Router setup](sprints/Sprint1.md)

[Sprint 2: Containers](sprints/Sprint2.md)

[Sprint 3: Fetching data with Axios](sprints/Sprint3.md)

[Sprint 4: Creating Todos](sprints/Sprint4.md)

[Sprint 5: Deleting Todos](sprints/Sprint5.md)

[Sprint 6: Edit/Update a Todo](sprints/Sprint6.md)

![list](https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif)
