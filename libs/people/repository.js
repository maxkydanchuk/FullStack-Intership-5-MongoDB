import {ObjectId} from "mongodb";
import {escapeRegExp} from '../../utils/utils.js'

export default class PeopleRepository {
    constructor(repositoryData) {
        this.repositoryData = repositoryData.db('StarWarsDatabase').collection('people');
    }

    async getAllPeople(sortBy, sortOrder, searchQuery, pageSize, pageNumber) {

        const count = await this.repositoryData.find().count().then(res => res);
        let totalCount = {"totalCount" : count};

        let options = {};
        if (searchQuery !== undefined) {
            options = {
                "fields.name": {$regex: escapeRegExp(searchQuery), $options: "i"}
            }
        }

        let cursor = await this.repositoryData.find(options)
            .skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * pageSize ) : 0 )
            .limit(pageSize);

        if (sortBy === undefined || sortOrder === undefined) {
            return await cursor.toArray().then(res => res);
        }
        const data = await cursor.sort(sortBy, sortOrder).toArray()
        return {data, totalCount};
    }

    async getPerson(id) {
        return await this.repositoryData.findOne({_id: new ObjectId(id)})
    }

    async createPerson(body) {
        const newPerson = {
            ...body,
            model: "resources.people",
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