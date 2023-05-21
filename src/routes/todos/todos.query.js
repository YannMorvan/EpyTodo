const db = require('../../config/db');

exports.show_all_Todos = (res) => {
    db.query('SELECT * FROM todo', (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ msg: 'Internal server error' });
        }
        else {
            res.status(200).json(results);
        }
    });
}

exports.showTodo = (res, id) => {
    db.query('SELECT * FROM todo WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ msg: 'Internal server error' });
        }
        else {
            res.status(200).json(results);
        }
    });
}

exports.addTodo = (res, todo) => {
    db.query('INSERT INTO todo SET ?', [todo], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ msg: 'Internal server error' });
        }
        else {
            res.status(200).json(results);
        }
    });
}

exports.updateTodo = (res, id, todo) => {
    db.query('UPDATE todo SET ? WHERE id = ?', [todo, id], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ msg: 'Internal server error' });
        }
        else {
            res.status(200).json(results);
        }
    });
}

exports.deleteTodo = (res, id) => {
    db.query('DELETE FROM todo WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ msg: 'Internal server error' });
        }
        else {
            res.status(200).json({ msg: 'Successfully deleted record number: ${id}' });
        }
    });
}
