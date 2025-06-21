import express ,{Express} from 'express';
import { getCreateUserPage, getHomePage ,postCreateUser,postDeleteUser,getViewUser,postUpdateUser} from '../controllers/use.controller';
import { get } from 'http';
import{getDashboardPage,getAdminUserPage}from 'controllers/admin/dashboard.controller'
const router = express.Router();

const webRoutes =(app: Express) =>{

    router.get('/',getHomePage)
    router.get('/admin/create-user',getCreateUserPage);



    router.post('/handlecreate-user',postCreateUser);
    router.post('/handle-delete-user/:id',postDeleteUser);
    router.get('/handle-view-user/:id',getViewUser);
    router.post('/handle-update-user',postUpdateUser);


//admin routes
router.get('/admin',getDashboardPage);
router.get('/admin/user',getAdminUserPage);
app.use("/",router);
}
export default webRoutes;