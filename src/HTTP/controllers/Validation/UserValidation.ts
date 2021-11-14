import IValidation from "./IValidation";
import UserRepository from "@repositories/UserRepository";

class UserValidation implements IValidation {
    private repository: UserRepository;
    private readonly filter: {[key:string]: string};

    constructor(repository : UserRepository ,filter: {[key:string]: string} ) {
        this.repository = repository;
        this.filter = filter;
    }

    async isUnique(): Promise<boolean> {
        return await this.repository.count(this.filter) === 0;
    }

    async validate(): Promise<boolean> {
        return await this.isUnique()
    }
}

export default UserValidation;