const express = require('express');
const app = express();

app.get('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    const todo = findTodoById(todoId);

    if (!todo)
        res.status(404).json({msg: "Not found"});
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = findUserById(userId);

    if (!user)
        res.status(404).json({msg: "Not found"});
});
