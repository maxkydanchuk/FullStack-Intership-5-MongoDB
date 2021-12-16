export default class StarshipsController {
    constructor(starshipsRepository ) {
        this.starshipsRepository = starshipsRepository;
    }

    getDataFromBody (body) {
        return {
            fields: {
                pilots: body.fields.pilots,
                MGLT: body.fields.MGLT,
                starship_class: body.fields.starship_class,
                hyperdrive_rating: body.fields.hyperdrive_rating,
            }
        };
    }

    getAllStarships = async (req, res) =>  {
        const result = await this.starshipsRepository.getAllStarships();
        res.status(200).json(result);
    }

    getStarship = async (req, res) => {
        const id = req.params.id
        const result = await this.starshipsRepository.getStarship(id);
        res.status(200).json(result);
    }

    createStarship = async (req, res) => {
        const body = this.getDataFromBody(req.body);
        const createItem = await this.starshipsRepository.createStarship(body)
        const getItem = await this.starshipsRepository.getStarship(createItem.insertedId)
        await res.status(201).json(getItem);
    }

    updateStarship = async (req, res) => {
        const body = this.getDataFromBody(req.body);
        const id = Number(req.params.id);
        const updateItem = await this.starshipsRepository.updateStarship(id, body);
        const getItem = await this.starshipsRepository.getStarshipById(updateItem._id);
        res.status(200).json(getItem);
    }

     async deleteStarship  (req, res) {
        const id = req.params.id;
        const responseData = await this.starshipsRepository.deleteStarship(id);
        return res.status(200).json(responseData);
    }
}
