import { Request, Response } from 'express';
// import { postUserService } from '../services/user.service';
const getHomePage = (req: Request, res: Response) => {
    res.render('home.ejs');
};
const getCreateUserPage = (req: Request, res: Response) => {
    res.render('create-user.ejs');
};

const postUserAPI = (req: Request, res: Response) => {
    // let { myName, myEmail, myAddress } = req.body;
    // console.log('myName: ', myName);
    // console.log('myEmail: ', myEmail);
    // console.log('myAddress: ', myAddress);
    console.log(req.body);
    res.redirect('/');
}
export {
    getHomePage, getCreateUserPage, postUserAPI
}