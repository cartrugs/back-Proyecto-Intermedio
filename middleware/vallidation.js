const {validationResult} = require('express-validator');

const validarJWT = (req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        res.status(400).json({
            ok:false,
            errors
        });
    };
    next()
};


const passwordValidator = check('password')
check('password')
.notEmpty().withMessage('Contraseña obligatòria')
.isLength({ min: 6 }).withMessage('minimo 6 caracteres')
.matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/).withMessage('La contraseña debe contener pelo menos 1 mayuscula y 1 numero');

module.exports={
    validarJWT,
    passwordValidator
    
}
