import {ObjectId} from "mongodb";
import {isValidEmail} from "../../utils/utils.js";
import bcrypt from "bcrypt";

export default class UserRepository {
    constructor(repositoryData) {
        this.repositoryData = repositoryData.db('StarWarsDatabase').collection('users');
    }

    async validateUser (body) {
        const { email } = body;
        const user = await this.repositoryData.findOne({email: email});

        if(user) {
            throw new Error('user with this email is already exists')
        }

        if(!isValidEmail(email)) {
            throw new Error('Email should be valid email e.g. user@example.com')
        }

        return true
    }

    async getUser(email) {
        return await this.repositoryData.findOne({email: email})
    }

    async getUserById(id) {
        return await this.repositoryData.findOne({_id: new ObjectId(id)});
    }

    async createUser(body) {
        const { email, password } = body;
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = {email, password: hashedPassword};

        const createItem = await this.repositoryData.insertOne(newUser);

        const getItem = await this.getUserById(createItem.insertedId);
        return getItem;

    }
}