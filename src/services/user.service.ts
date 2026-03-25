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
};
const updateUserById = async (id: string, name: string, email: string, address: string) => {
    const user = await prisma.user.update(
        {
            where: { id: +id },
            data: {
                name: name,
                email: email,
                address: address
            }
        });
    return user;
}

const deleteUserById = async (id: string) => {
    const user = await prisma.user.delete({
        where: { id: +id }
    });
    return user;
}
export {
    getAllUsers, postNewUser
}