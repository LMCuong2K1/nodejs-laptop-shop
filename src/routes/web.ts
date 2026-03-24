import express, { Express } from 'express';
import { getHomePage, getCreateUserPage, postUserAPI } from '../controllers/user.controller';
const router = express.Router();

const webRoutes = (app: Express) => {
    router.get('/', getHomePage);
    router.get('/create-user', getCreateUserPage);
    router.post('/post-user', postUserAPI);
    app.use('/', router);
}
export default webRoutes;