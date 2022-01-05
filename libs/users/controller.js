import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { secretKey } from '../../config/config.js';
import validate from "deep-email-validator";
import {escapeRegExp, isValidEmail} from "../../utils/utils.js";

export default class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    getDataFromBody(body) {
        return {
            email: body.email,
            password: body.password
        }
    }

    createToken(user) {
        return jwt.sign({ userId: user._id}, secretKey, { expiresIn: "1h"});
    }

    getUser = async (req, res) => {
        const {email, password} = req.body
        const user = await this.userRepository.getUser(email);

        if (!user) {
          return res.status(404).json({error: 'user does not exist'});
        }

        const isMatchPassword = await bcrypt.compare(password, user.password);

        if(!isMatchPassword) {
            return res.status(400).json({error: 'Invalid password'});
        }


        const token = this.createToken(user).toString();
        return res.status(200).json(token)

    }

    createUser = async (req, res) => {
        const body = this.getDataFromBody(req.body)

        try {
           await this.userRepository.validateUser(body);
            const result = await this.userRepository.createUser(body);
            return await res.status(201).json(result);
        }
        catch (e) {
           return await res.status(404).json({error: e.message})
        }
    }
}