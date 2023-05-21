query = require('./todos.query');
const express = require('express');
const app = express();

app.get('/todos', (req, res) => {
    query.show_all_Todos (res);
}
);

app.get('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    query.showTodo (res, todoId);
}
);

app.post('/todos', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const due_time = req.body.due_time;
    const userId = req.body.userId;
    const status = req.body.status;
    const todo = { title, description, due_time, userId, status };
    query.addTodo (res, todo);
}
);

app.put('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const due_time = req.body.due_time;
    const userId = req.body.userId;
    const status = req.body.status;
    const todo = { title, description, due_time, userId, status };
    query.updateTodo (res, todoId, todo);
}
);

app.delete('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    query.deleteTodo (res, todoId);
}
);

module.exports = app;
