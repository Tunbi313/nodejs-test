
import { Request, Response } from "express";
import { getAllUsers } from "services/user.services";

const getDashboardPage = async(req: Request, res: Response) => {


    return res.render("admin/dashboard/show.ejs");
}
const getAdminUserPage = async(req: Request, res: Response) => {

    const users = await getAllUsers();
    return res.render("admin/user/show.ejs",{
        users: users
    });
}

export{ getDashboardPage,getAdminUserPage};