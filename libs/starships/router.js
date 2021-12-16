import { Router } from "express";

function StarshipRouter(controller) {
    const router = Router();

    router.get('/api/starships', (res, req) => {
        return controller.getAllStarships(res, req);
    });
    router.get('/api/starships/:id', (res, req) => {
        return controller.getStarship(res, req);
    });
    router.post('/api/starships/', (res, req) => {
        return controller.createStarship(res, req);
    });
    router.put('/api/starships/:id/edit', (req, res) => {
        return controller.updateStarship(req, res);
    });
    router.delete('/api/starships/:id', (req, res) => {
        return controller.deleteStarship(req, res);
    });

    return router;
}

export default StarshipRouter;