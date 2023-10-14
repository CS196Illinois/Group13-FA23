import UsersDao from '../daos/users.dao';
import { CRUD } from '../../common/crud.interface';
import { CreateUserDto } from '../create.user.dto';
import { PutUserDto } from '../put.user.dto';
import { PatchUserDto } from '../patch.user.dto';

class UsersService implements CRUD {
    async create(resource: CreateUserDto) {
        return UsersDao.addUser(resource);
    }

    async deleteById(id: string) {
        return UsersDao.removeUserById(id);
    }

    async list(limit: number, page: number) {
        return UsersDao.getUsers();
    }

    async patchById(id: string, resource: PatchUserDto) {
        return UsersDao.patchUserById(id, resource);
    }

    async readById(id: string) {
        return UsersDao.getUserById(id);
    }

    async putById(id: string, resource: PutUserDto) {
        return UsersDao.putUserById(id, resource);
    }

    async getUserByNetID(email: string) {
        return UsersDao.getUserByEmail(email);
    }
}

export default new UsersService();
