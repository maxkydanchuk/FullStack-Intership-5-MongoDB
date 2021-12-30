import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { secretKey } from '../../config/config.js';

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
        console.log(secretKey)
        return jwt.sign({ user: user}, secretKey, { expiresIn: "1h"});
    }

    getUser = async (req, res) => {
        const {email, password} = req.body
        const user = await this.userRepository.getUser(email);

        const isMatchPassword = await bcrypt.compare(password, user.password);
        
        if (!user) {
          return res.status(404).json({error: 'user does not exist'});
        }

        if(!isMatchPassword) {
            return res.status(400).json({message: 'Invalid password'});
        }

        return res.status(200).json(this.createToken(user))
    }

    createUser = async (req, res) => {
        const body = this.getDataFromBody(req.body)
        const { email, password } = body;

        const user = await this.userRepository.getUser(email);

        if(user) {
            return await res.status(404).json({error: 'user with this email already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = {email, password: hashedPassword}

        const createItem = await this.userRepository.createUser(newUser)
        const getItem = await this.userRepository.getUserById(createItem.insertedId)
        return await res.status(201).json(getItem);
    }
}