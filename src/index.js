const express = require ("express");
const dotenv = require ('dotenv');
const app = express ();
const port = 3000;
dotenv.config()

require('./routes/auth/auth');
require('./routes/todos/todos');
require('./routes/user/user');

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
