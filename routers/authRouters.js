const express = require("express")
const { check } = require('express-validator');
const {createUser,loginUser,renewToken} = require('../controllers/authController')
const { validarEx } = require('../middleware/vallidation');
const router = express.Router();


//POST REGISTER
router.post('/register',
    [
        check('email', 'Email obligatório').isEmail(),
        check('nombre', 'Nombre obligatório').not().isEmpty(),
        check('password').notEmpty().withMessage('Contraseña obligatòria').isLength({ min: 6 }).withMessage('minimo 6 caracteres').matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/).withMessage('La contraseña debe contener pelo menos 1 mayuscula y 1 numero'),
        check('passConfirm').not().isEmpty(),
        validarEx
    ],
    createUser);


//POST LOGIN
router.post('/login',
    [
        check('user', 'Email obligatório').isEmail(),
        check('password', 'Password obligatório').not().isEmpty(),
        validarEx
    ],
    loginUser);


//RENEW TOKEL
router.get('/renew', renewToken)


module.exports = router