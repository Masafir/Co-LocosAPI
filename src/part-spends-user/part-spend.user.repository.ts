import { EntityRepository, Repository } from "typeorm";
import { CreatePartSpendUserDto } from "./dto/create-part-spend-user.dto";
import { PartSpendUser } from "./part-spend-user.entity";

@EntityRepository(PartSpendUser)
export class PartSpendUserRepository extends Repository<PartSpendUser> {

    async createPartSpendUser(createPartSpendUserDto : CreatePartSpendUserDto): Promise<PartSpendUser> {
        const {value, resolved} =  createPartSpendUserDto;

        const partspenduser = new PartSpendUser();
        partspenduser.value = value;
        partspenduser.resolved = resolved;

    
        await partspenduser.save();
    
        return partspenduser;
    }

}