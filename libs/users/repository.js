import {ObjectId} from "mongodb";

export default class UserRepository {
    constructor(repositoryData) {
        this.repositoryData = repositoryData.db('StarWarsDatabase').collection('users');
    }

    async getUser(email) {
        return await this.repositoryData.findOne({email: email})
    }

    async getUserById(id) {
        return await this.repositoryData.findOne({_id: new ObjectId(id)});
    }
    async createUser(body) {
        return await this.repositoryData.insertOne(body)
    }
}