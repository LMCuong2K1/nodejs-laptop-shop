import { prisma } from 'config/client';

const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const postNewUser = async (name: string, email: string, address: string) => {
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            address: address
        }
    })
    return newUser
}


export {
    getAllUsers, postNewUser
}