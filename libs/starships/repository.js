import { ObjectId } from 'mongodb'

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
                model: "resources.starship",
                pk:  Number(new Date())
            };
       return await this.repositoryData.insertOne(newStarship)
    }

   async updateStarship (id, body) {
       const updatedItem = await this.repositoryData.findOneAndUpdate({_id:id}, {$set: body});
       console.log(updatedItem)
       return updatedItem.value;
    }

    async deleteStarship (id)  {
         await this.repositoryData.findOneAndDelete({_id: new ObjectId(id)});
        return await this.repositoryData.find().toArray()
    }
}