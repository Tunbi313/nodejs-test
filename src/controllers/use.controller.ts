import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user.services";
const getHomePage = async(req: Request, res: Response) => {
//get users
    const users = await getAllUsers();

    return res.render("home",{
        users: users
});
}

const getCreateUserPage = (req: Request, res: Response) => {

    return res.render("create-user")
}
const postCreateUser = async(req: Request, res: Response) => {
    
    const{fullname, email, address} = req.body;
    //handle create user
   await handleCreateUser(fullname, email, address)

    return res.redirect("/");
}



export { getHomePage, getCreateUserPage,postCreateUser,handleCreateUser };