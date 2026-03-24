import { Request, Response } from 'express';
import { getAllUsers,postNewUser } from '../services/user.service';
const getHomePage = async(req: Request, res: Response) => {
    const users = await getAllUsers();
    res.render('home.ejs',{users:users});
};
const getCreateUserPage = (req: Request, res: Response) => {
    res.render('create-user.ejs');
};
const postCreateUser = async (req: Request, res: Response) => {
    const {name,email,address} = req.body;
    let newUser = await postNewUser(name,email,address);
    return res.redirect('/');
}

export {
    getHomePage,getCreateUserPage,postCreateUser
}