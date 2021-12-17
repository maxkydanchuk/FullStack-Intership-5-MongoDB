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
                birth_year: body.fields.birth_year
            }
        }
    }


    getAllPeople = async (req, res) => {
        const sortBy = req.query.sortBy;
        const sortOrder = req.query.sortOrder;
        const searchQuery = req.query.search;
        const pageSize = Number(req.query.size);
        const pageNumber = Number(req.query.page);
        const result = await this.peopleRepository.getAllPeople(sortBy, sortOrder, searchQuery, pageSize, pageNumber);
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
        await this.peopleRepository.updatePerson(id, body);
        const getItem = await this.peopleRepository.getPerson(id);
        res.status(200).json(getItem);
    }

   deletePerson = async  (req, res) => {
       const id = req.params.id;
       await this.peopleRepository.deleteStarship(id);
       return res.status(200).json(id);
    }
}