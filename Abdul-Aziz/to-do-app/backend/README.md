# Todo API Backend

This is the backend for the Todo application, built with Node.js and Express.js. It uses a JSON file for data storage instead of a database.

## Features

- Create, Read, Update, Delete (CRUD) operations for Todos
- Filter tasks by completion status
- RESTful API endpoints

## API Endpoints

### Get All Tasks
- **GET** `/todos`
- Query parameters: `?completed=true` or `?completed=false` to filter by status
- Testing code for console:
  - Get all todos
    ```js
    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
    ```
    ![Get All Tasks](screenshots/get_all_tasks.png)
  - Get tasks by status
    ```js
    fetch("http://localhost:3000/todos?completed=true")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
    ```
    ![Get Tasks by Status](screenshots/get_tasks_by_status.png)

### Get Single Task
- **GET** `/todos/:id`
- Testing code for console:
  ```js
  fetch("http://localhost:3000/todos/:id")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
  ```
  ![Get Single Todo](screenshots/get_single_task.png)

### Create Task
- **POST** `/todos`
- Body: `{ "title": "string", "description": "string", "completed": boolean }`
- Code to test in console:
  ```js
  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "string",
      description: "description",
      completed: boolean
    })
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
  ```
  ![Create Todo](screenshots/create_tasks.png)

### Update Task
- **PUT** `/todos/:id`
- Body: `{ "title": "string", "description": "string", "completed": boolean }`
- Code to test in console:
  ```js
  fetch("http://localhost:3000/todos/:id", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "string",
      description: "description",
      completed: boolean
    })
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
  ```
  ![Update Todo](screenshots/update_tasks.png)

### Delete Task
- **DELETE** `/todos/:id`
- Code to test in console:
  ```js
  fetch("http://localhost:3000/todos/:id", {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
  ```
  ![Delete Todo](screenshots/delete_tasks.png)

## Installation

1. Navigate to the backend directory
2. Run `npm install`
3. Run `npm start`
