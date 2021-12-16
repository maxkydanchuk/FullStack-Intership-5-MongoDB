export default class PeopleRepository {
    constructor(repositoryData) {
        this.repositoryData = repositoryData.db('StarWarsDatabase').collection('people');
    }

   async getAllPeople () {
       return await this.repositoryData.find().toArray();
    }

    getPerson (id) {
        return this.repositoryData.find(person => person.pk === id);
    }

    createPerson (body) {
        const newPerson =  {
            ...body,
            model: "resources.starship",
            pk:  Number(new Date())
        };

        this.repositoryData.push(newPerson)
        console.log(this.repositoryData)
    }

    updatePerson (id, body) {
        let person = this.repositoryData.find(person => person.pk === id);
        person = {
            ...person,
           ...body,
        };
       const index = this.repositoryData.findIndex(el => el.pk === id);
       this.repositoryData =  [...this.repositoryData.slice(0, index), person, ...this.repositoryData.slice(index +1)];

       return this.repositoryData;
    }

    deletePerson (id) {
        this.repositoryData = this.repositoryData.filter(person => person.pk !== id);
        return this.repositoryData;
    }
}