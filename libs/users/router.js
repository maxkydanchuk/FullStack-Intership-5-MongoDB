import { Router } from "express";
import {emailValidation} from "../../middlewares/validation.js";


function UsersRouter(controller) {
    const router = Router();

    router.post('/api/login/', emailValidation ,(req, res) => {
        return controller.getUser(req, res)
    })

    router.post('/api/register/',  emailValidation, (req, res) => {
        return controller.createUser(req, res)
    })

    return router
}

export default UsersRouter;