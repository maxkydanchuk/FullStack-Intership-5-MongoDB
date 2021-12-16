import {ObjectId} from 'mongodb'

export default class StarshipsRepository {
    constructor(repositoryData) {
        this.repositoryData = repositoryData.db('StarWarsDatabase').collection('starships');
    }

     async getAllStarships () {
        return await this.repositoryData.find().toArray();
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