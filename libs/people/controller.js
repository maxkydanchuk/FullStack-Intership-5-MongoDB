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
        const id = req.params.id
        const result = await this.peopleRepository.getPerson(id);
        res.status(200).json(result);
    }

    createPerson = async  (req, res) => {
        const body = this.getDataFromBody(req.body);
        const createItem = await this.peopleRepository.createPerson(body)
        const getItem = await this.peopleRepository.getPerson(createItem.insertedId)
        await res.status(201).json(getItem);
    }

    updatePerson = async  (req, res) => {
        const body = this.getDataFromBody(req.body);
        const id = req.params.id;
        const updateItem = await this.peopleRepository.updatePerson(id, body);
        const getItem = await this.peopleRepository.getPerson(updateItem._id);
        res.status(200).json(getItem);
    }

   deletePerson = async  (req, res) => {
       const id = req.params.id;
       const responseData = await this.peopleRepository.deleteStarship(id);
       return res.status(200).json(responseData);
    }
}