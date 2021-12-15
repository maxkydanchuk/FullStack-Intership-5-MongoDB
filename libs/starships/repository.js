export default class StarshipsRepository {
    constructor(repositoryData) {
        this.repositoryData = repositoryData;
    }

     getAllStarships () {
        return  this.repositoryData;
    }

    getStarship (id) {
        return this.repositoryData.find(starship => starship.pk === id);
    }

    createStarship (body) {
        const newStarship =  {
            ...body,
                model: "resources.starship",
                pk:  Number(new Date())
            };
        this.repositoryData.push(newStarship)
    }

    updateStarship (id, body) {
        let starship = this.repositoryData.find(starship => starship.pk === id);
        starship = {
            ...starship,
            ...body,
        };
        const index = this.repositoryData.findIndex( el => el.pk === id);
        this.repositoryData = [...this.repositoryData.slice(0, index), starship, ...this.repositoryData.slice(index + 1)];

        return this.repositoryData
    }

    deleteStarship (id)  {
        this.repositoryData = this.repositoryData.filter(starship => starship.pk !== id);
        return this.repositoryData;
    }
}