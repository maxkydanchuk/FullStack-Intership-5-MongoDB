import { body } from 'express-validator';



export const  emailValidation = body('email').isEmail().withMessage('Incorrect email')
// export const passwordValidation = check('password', 'Password should have at least 1 lowercase letter and at least 1 number')
//         .isLength({min: 6}).matches("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$");
