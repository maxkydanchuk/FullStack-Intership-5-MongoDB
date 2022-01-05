import jwt from 'jsonwebtoken';
import { secretKey } from '../../config/config.js';

export default class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    getDataFromBody(body) {
        return {
            email: body.email,
            password: body.password,
            password2: body.password2
        }
    }

    createToken(user) {
        return jwt.sign({ userId: user._id}, secretKey, { expiresIn: "1h"});
    }

    getUser = async (req, res) => {
        const body = req.body;

        try {
            await this.userRepository.validateLoginUser(body);
            const result = await this.userRepository.getUser(body.email);
            const token = this.createToken(result).toString();
            return res.status(200).json(token)
        }

        catch(e) {
            return res.status(404).json({error: e.message})
        }
    }

    createUser = async (req, res) => {
        const body = this.getDataFromBody(req.body)

        try {
           await this.userRepository.validateRegisterUser(body);
            const result = await this.userRepository.createUser(body);
            return res.status(201).json(result);
        }
        catch (e) {
           return res.status(404).json({error: e.message})
        }
    }
}