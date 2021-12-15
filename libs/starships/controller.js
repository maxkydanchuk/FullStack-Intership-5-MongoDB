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
        const id = Number(req.params.id);
        const result = await this.starshipsRepository.getStarship(id);
        res.status(200).json(result);
    }

    createStarship = async (req, res) => {
        const body = this.getDataFromBody(req.body);
        this.starshipsRepository.createStarship(body)
        await res.status(201).send(this.starshipsRepository);
    }

    updateStarship = async (req, res) => {
        const body = this.getDataFromBody(req.body);
        const id = Number(req.params.id);
        this.starshipsRepository = await this.starshipsRepository.updateStarship(id, body);
        res.status(200).json(this.starshipsRepository);
    }

     deleteStarship  (req, res) {
        const id = Number(req.params.id);
        const responseData = this.starshipsRepository.deleteStarship(id);
        return res.status(200).json(responseData);
    }
}
