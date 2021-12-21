import {ObjectId} from 'mongodb'
import { escapeRegExp } from "../../utils/utils.js";

export default class StarshipsRepository {
    constructor(repositoryData) {
        this.repositoryData = repositoryData.db('StarWarsDatabase').collection('starships');
    }

     async getAllStarships (sortBy, sortOrder, searchQuery, pageSize, pageNumber) {
        let options = {}

            if(searchQuery !== undefined) {
                options = {
                    "fields.starship_class": {$regex: escapeRegExp(searchQuery), $options: "i"}
                }
            }

            let cursor = await this.repositoryData.find(options)
                .skip(pageNumber > 0 ? ((pageNumber -1) * pageSize) : 0)
                .limit(pageSize);

            if(sortBy === undefined || sortOrder === undefined) {
                return await cursor.toArray().then(res => res);
            }

        return await cursor.sort(sortBy, sortOrder).toArray().then(res => res);
    }

    async getStarship (id) {
        return await this.repositoryData.findOne({_id: new ObjectId(id)})

    }

    async createStarship (body) {
        const newStarship =  {
            ...body,
                model: "resources.starship"
            };
       return await this.repositoryData.insertOne(newStarship)
    }

   async updateStarship (id, body) {
       return await this.repositoryData.updateOne({_id: new ObjectId(id)}, {$set: body})
    }

    async deleteStarship (id)  {
        return this.repositoryData.findOneAndDelete({_id: new ObjectId(id)});
    }
}