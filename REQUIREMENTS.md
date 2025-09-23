# TODO

## Requirements
- Create a folder called "todo", where all of your code will be placed.
- You must create HTML, JavaScript and CSS files.
- You must create a Todo application, that creates and reads todos.
- You must not start with any data.
- When you create a new todo, you must also save it to session storage (unless you are using the advanced option, local storage).
- On page load, your app must read data from session storage. The idea is that when you refresh the page you still have all of your data.
- You can do any form workflow you want, basically if you want to edit one at a time or allow inline editing of all todos.
- You must use Bootstrap, which will be provided to you. You can still go hog wild on your own styling.
- You must not use complete code from W3 or MDN, only small snippets for small components.
- You must not use code from the chatbot.
- You must use Git.

## Hints
- You will need to keep track of both the data and the HTML elements.
- When you save to session storage, remember you will need to convert it to a string first.
- The same is true when you read from session storage. It will be a string. You will need to convert it to a JavaScript array/object.
- Your best bet to get Bootstrap help online is going to be https://getbootstrap.com/docs/5.3/getting-started/introduction/ and browsing through the left side nav.
- There are 3 versions of the site possible, in order of increasing difficulty: 1. Basic form that does add only (which is the minimum requirement), 2. Form that does full CRUD but allows editing of one todo at a time, 3. Form that does full CRUD and can edit each todo inline where it is.
- Your styling will need to work with Bootstrap, so make sure you include your CSS after Bootstrap and be aware that it is touching everything on the page.

## Advanced Options (Not Required, unless you borrowed code)
- The most basic version is to allow editing of only one item at a time. Advanced would be to allow inline editing of items.
- You can do full CRUD, create, read, update and delete todos.
- You can edit each todo on its own row, so that each todo is editable in place.
- You can add a priority field, like a select box with a list of priority levels, either numbers or text.
- You can store your data in local storage.
- You can use Animate Style to help enforce workflow and success/completion of user interactions.
- You can use Bootstrap-icons but you must use them as native SVGs, not by importing the library. Importing the library directly from the CDN can cause performance issues and making a local copy doesn't work as it points to its own resources that we don't have access to. Your best bet is to find the one you want, such as https://icons.getbootstrap.com/icons/pencil-fill/, and under "Copy HTML" copy the svg code.

## Goals
- You should be able to describe what you did and how you did it. Example: I made a Todo app in native JavaScript. I made a variable to track the data and used that data to manage the session storage and the HTML, etc...
- You should know how session storage works and the methods used to manage it.