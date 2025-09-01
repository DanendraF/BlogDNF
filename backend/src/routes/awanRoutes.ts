import { Router } from 'express';
import AwanController from '../controllers/awanController';

const router = Router();
const awanController = new AwanController();

export function setAwanRoutes(app) {
    app.use('/awan', router);
    router.get('/', awanController.getAwan.bind(awanController));
    router.post('/', awanController.createAwan.bind(awanController));
}