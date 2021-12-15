import { Router } from "express";

function StarshipRouter(controller) {
    const router = Router();

    router.get('/api/starships', controller.getAllStarships);
    router.get('/api/starships/:id', controller.getStarship);
    router.post('/api/starships/', controller.createStarship);
    router.put('/api/starships/:id/edit', controller.updateStarship);
    router.delete('/api/starships/:id', (req, res) => {
        return controller.deleteStarship(req, res);
    });

    return router;
}

export default StarshipRouter;