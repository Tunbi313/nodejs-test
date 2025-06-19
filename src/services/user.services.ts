
import getConnection from "../config/database";
import {prisma} from "config/client"


const handleCreateUser = async(
    fullname: string,
    email: string,
    address: string) => {
     
    
  const newUser= await prisma.user.create({
    data:{
        name: fullname,
        email: email,
        address: address
    }
   })
   return newUser;
}

const getAllUsers = async() => {
    const users = await prisma.user.findMany();
    return users;

}

const handleDeleteUser = async(id: string) =>{
    const deleteUser = await prisma.user.delete({
        where:{id:+id}
    })
    return deleteUser;
}

const getUserById = async(id:string) =>{
const user = await prisma.user.findUnique({
    where:{id:+id}
})
return user;
}
const UpdateUserById = async(id: string, 
    fullname: string,
    email: string,
    address: string
) => {
   const updatedUsers = await prisma.user.update({
    where :{id:+id},
    data:{
        name:fullname,
        email:email,
        address:address
    }
   })
   return updatedUsers;
}

export { handleCreateUser, getAllUsers ,handleDeleteUser,getUserById,UpdateUserById}