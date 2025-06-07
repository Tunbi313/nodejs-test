import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.services";
const getHomePage = (req: Request, res: Response) => {

    return res.render("home")
}

const getCreateUserPage = (req: Request, res: Response) => {

    return res.render("create-user")
}
const postCreateUser = (req: Request, res: Response) => {
    
    const{fullname, email, address} = req.body;
    //handle create user
    handleCreateUser(fullname, email, address)

    return res.redirect("/");
}



export { getHomePage, getCreateUserPage,postCreateUser };