export default class PeopleController {
    constructor(peopleRepository) {
        this.peopleRepository = peopleRepository;
    }

    getDataFromBody (body) {
        return {
            fields: {
                name: body.fields.name,
                gender: body.fields.gender,
                skin_color: body.fields.skin_color,
                hair_color: body.fields.hair_color,
                height: body.fields.height,
                eye_color: body.fields.eye_color,
                mass: body.fields.mass,
                // "homeworld": 1,
                birth_year: body.fields.birth_year
            }
        }
    }

    getAllPeople = async (req, res) => {
        const result = await this.peopleRepository.getAllPeople();
        res.status(200).json(result);
    }

    getPerson = async  (req, res) => {
        const id = Number(req.params.id);
        const result = await this.peopleRepository.getPerson(id);
        res.status(200).json(result);
    }

    createPerson = async  (req, res) => {
        const body = this.getDataFromBody(req.body);
        this.peopleRepository.createPerson(body)
        await res.status(201).send(this.peopleRepository);
    }

    updatePerson = async  (req, res) => {
        const body = this.getDataFromBody(req.body);
        const id = Number(req.params.id);
        this.peopleRepository = await this.peopleRepository.updatePerson(id, body);
        res.status(200).json(this.peopleRepository);
    }

   deletePerson = async  (req, res) => {
        const id = Number(req.params.id);
        this.peopleRepository = await this.peopleRepository.deletePerson(id);
        return res.status(200).json(this.peopleRepository);
    }
}