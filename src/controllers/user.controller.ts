import { Request, Response } from 'express';
import { getAllUsers, postNewUser } from '../services/user.service';
const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    res.render('home.ejs', { users: users });
};
const getCreateUserPage = (req: Request, res: Response) => {
    res.render('create-user.ejs');
};
const postCreateUser = async (req: Request, res: Response) => {
    try {
        const { name, email, address } = req.body;
        await postNewUser(name, email, address);
        return res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).send("Đã có lỗi xảy ra khi tạo người dùng.");
    }
}

export {
    getHomePage, getCreateUserPage, postCreateUser
}