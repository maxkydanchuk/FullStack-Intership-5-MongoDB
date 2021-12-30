import { Router } from "express";

function UsersRouter(controller) {
    const router = Router();

    router.get('/api/login/', (res, req) => {
        return controller.getUser(res, req)
    })

    router.post('/api/register/', (res, req) => {
        return controller.createUser(res, req)
    })

    return router
}

export default UsersRouter;