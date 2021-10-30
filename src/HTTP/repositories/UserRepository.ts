import BaseRepository from "./BaseRepository";
import UserModel from "@entities/User";
import UserSchema from "@dto/User"

class UserRepository extends BaseRepository<UserModel>{
    constructor () {
        super(UserSchema);
    }
}

Object.seal(UserRepository);
export default UserRepository;