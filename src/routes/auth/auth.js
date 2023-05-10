const express = require ('express')
const bcrypt = require ('bcrypt')
//const { register, login } = require ('user/user.query')
const router = express.Router();

router.post('/register', (req, res) => {
    var email = req.body.email;
    var name = req.body.name;
    var firstname = req.body.firstname;
    var password = req.body.password;

    if (!email || !name || !firstname || !password || !email.match(regex))
        return res.status(400).json({ msg: 'Bad parameter' });
    register(res, email, name, firstname, password);
})

module.exports = router;