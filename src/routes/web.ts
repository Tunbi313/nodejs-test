import express ,{Express} from 'express';
import { getCreateUserPage, getHomePage ,postCreateUser} from '../controllers/use.controller';
import { get } from 'http';

const router = express.Router();

const webRoutes =(app: Express) =>{

    router.get('/',getHomePage)
    router.get('/create-user',getCreateUserPage);
    router.post('/handlecreate-user',postCreateUser);
app.use("/",router);
}
export default webRoutes;