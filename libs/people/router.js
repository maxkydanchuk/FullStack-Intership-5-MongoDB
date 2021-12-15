import { Router } from "express";

function PeopleRouter(controller) {
    const router = Router();

    router.get('/api/people', controller.getAllPeople);
    router.get('/api/people/:id', controller.getPerson);
    router.post('/api/people/', controller.createPerson);
    router.put('/api/people/:id/edit', controller.updatePerson);
    router.delete('/api/people/:id', controller.deletePerson);

    return router;
}

export default PeopleRouter;