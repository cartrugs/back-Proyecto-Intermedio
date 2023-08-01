const { validarExpress } = require('../middleware/vallidation');
const { check } = required('express-validator')
const router = express.router();


//POST REGISTER
router.post('/register',
    [
        check('user', 'Email obligatório').isEmail(),
        check('nombre', 'Nombre obligatório').not().isEmpty(),
        check('password').notEmpty().withMessage('Contraseña obligatòria').isLength({ min: 6 }).withMessage('minimo 6 caracteres').matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/).withMessage('La contraseña debe contener pelo menos 1 mayuscula y 1 numero'),
        validarExpress
    ],
    createUser);


//POST LOGIN
router.post('/login',
    [
        check('user', 'Email obligatório').isEmail(),
        check('password', 'Password obligatório').not().isEmpty(),
        validarExpress
    ],
    loginUser);


//RENEW TOKEL
router.get('/renew', validarJWT, renewToken)