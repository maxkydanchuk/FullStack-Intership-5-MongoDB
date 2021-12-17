import {ObjectId} from "mongodb";

export default class PeopleRepository {
    constructor(repositoryData) {
        this.repositoryData = repositoryData.db('StarWarsDatabase').collection('people');
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    async getAllPeople(sortBy, sortOrder, searchQuery) {
        let options = {};

        if (sortBy !== undefined && sortOrder !== undefined) {
            options = {'sort': [sortBy, sortOrder]};
        }
        if(searchQuery !== undefined) {
            options = {"fields.name": {$regex: this.escapeRegExp(searchQuery), $options:"i"}}
        }

        if(options.sort) {
            return  await this.repositoryData.find({}, options).toArray();
        } else {
            return await this.repositoryData.find(options).toArray();
        }
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
        return await this.repositoryData.updateOne({_id: new ObjectId(id)}, {$set: body})
    }

    async deletePerson(id) {
        return await this.repositoryData.findOneAndDelete({_id: new ObjectId(id)});

    }
}