import { createRequire } from "module";
import PeopleRepository from "./repository.js";
import PeopleController from './controller.js'
import PeopleRouter from './router.js';
import mongoClient from "../../db.js";

// const require = createRequire(import.meta.url);

// const peopleData = require("../../data/people.json");

const peopleRepository = new PeopleRepository(mongoClient);

const peopleController = new PeopleController(peopleRepository);

const peoplepRouter = PeopleRouter(peopleController);

export default peoplepRouter;
