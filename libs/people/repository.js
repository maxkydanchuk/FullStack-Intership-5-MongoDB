import {ObjectId} from "mongodb";

export default class PeopleRepository {
    constructor(repositoryData) {
        this.repositoryData = repositoryData.db('StarWarsDatabase').collection('people');
    }

    async getAllPeople() {
        return await this.repositoryData.find().toArray();
    }

    async getPerson(id) {
        return await this.repositoryData.findOne({_id: new ObjectId(id)})
    }

    async createPerson(body) {
        const newPerson = {
            ...body,
            model: "resources.starship",
        };

        return await this.repositoryData.insertOne(newPerson)
    }

    async updatePerson(id, body) {
        const updatedItem = await this.repositoryData.findOneAndUpdate({_id: new ObjectId(id)}, {$set: body});

        return updatedItem.value;
    }

    async deletePerson(id) {
        await this.repositoryData.findOneAndDelete({_id: new ObjectId(id)});
        return await this.repositoryData.find().toArray()
    }
}