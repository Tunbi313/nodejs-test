import { Request, Response } from "express";
import { getAllUsers, handleCreateUser,handleDeleteUser,getUserById,UpdateUserById } from "../services/user.services";
const getHomePage = async(req: Request, res: Response) => {
//get users
    const users = await getAllUsers();

    return res.render("home",{
        users: users
});
}

const getCreateUserPage = (req: Request, res: Response) => {

    return res.render("admin/user/create.ejs")
}
const postCreateUser = async(req: Request, res: Response) => {
    
    const{fullname, email, address} = req.body;
    //handle create user
   const a = await handleCreateUser(fullname, email, address)

    return res.redirect("/");
}

const postDeleteUser = async(req: Request, res: Response) => {
    
  const {id} = req.params;
const a = await handleDeleteUser(id)
    return res.redirect("/");
}
const getViewUser = async (req: Request,res:Response) =>{
    const{id} =req.params;
    const user = await getUserById(id);
   // await getUserById(id);
    return res.render("view-user.ejs",{
        id: id,
        user: user
    }
)
}
const postUpdateUser = async(req:Request,res:Response) =>{
    const{id,email,fullname, address} = req.body;
    const a = await UpdateUserById(id, fullname, email, address);
    return res.redirect("/");
}


export { getHomePage, getCreateUserPage,postCreateUser,postDeleteUser,getViewUser,postUpdateUser };