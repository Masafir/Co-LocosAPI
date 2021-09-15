import { EntityRepository, Repository } from "typeorm";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-Group.dto";
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

    async updateGroup(updateGroupDto: UpdateGroupDto): Promise<Group> {
        const {id, name} = updateGroupDto;
        const group = await this.findOne(id);

        group.name = name;
        await group.save();
        return group;
    }

    async deleteGroup(id: string) {
        await Group.delete(id);
        console.log('test')
    }

}