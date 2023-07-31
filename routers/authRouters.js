const {validarJWT,passwordValidator} = require('../middleware/vallidation');
const {check} = required('express-validator')
const router = express.router();


//POST REGISTER
router.post('/register',
[
    check('user','Email obligatório').isEmail(),
    check('nombre', 'Nombre obligatório').not().isEmpty(),
    passwordValidator
],
createUser)


//POST LOGIN
router.post('/login',
[
    check('user','Email obligatório').isEmail(),
    check('password','Password obligatório').not().isEmpty()
],
loginUser)


//RENEW TOKEL
router.get('/renew',validarJWT,renewToken)