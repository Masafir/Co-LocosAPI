import { EntityRepository, Repository } from "typeorm";
import { CreateGroupDto } from "./dto/create-group.dto";
import { Group } from "./group.entity";

@EntityRepository(Group)
export class GroupRepository extends Repository<Group> {

    async createGroup(createGroupDto : CreateGroupDto): Promise<Group> {
        const {name} =  createGroupDto;

        const group = new Group();
        group.name = name;

    
        await group.save();
    
        return group;
    }

}