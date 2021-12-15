import { createRequire } from "module";
import StarshipsRepository from './repository.js'
import StarshipsController from './controller.js'
import StarshipRouter from './router.js';

const require = createRequire(import.meta.url);

const starshipsData = require("../../data/starships.json");

const starshipRepository = new StarshipsRepository(starshipsData);

const starshipController = new StarshipsController(starshipRepository);

const starshipRouter = StarshipRouter(starshipController);

export default starshipRouter;
