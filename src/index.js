const express = require('express');
const dotenv = require('dotenv');
const port = 3000;
const app = express();
dotenv.config();

const auth = require('./middleware/auth');
const login = require('./middleware/auth');
const authRoutes = require('./routes/auth/auth');
const userRouter = require('./routes/user/user');
const todosRoutes = require('./routes/todos/todos');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use(express.json({
    verify: (req, res, buf, encoding) => {
        try {
            JSON.parse(buf);
        } catch (error) {
            res.status(400).json({ msg: "Bad parameter" });
        }
    }
}));

app.use('/', require('./routes/auth/auth.js'));
// app.use('/user', auth, userRouter);
// app.use('/todos', auth, todosRoutes);

app.use("*", (req, res) => res.status(404).json({ msg: "Not Found" }));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
