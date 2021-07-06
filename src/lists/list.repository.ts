import { EntityRepository, Repository } from "typeorm";
import { CreateListDto } from "./dto/create-list.dto";
import { List } from "./list.entity";

@EntityRepository(List)
export class ListRepository extends Repository<List> {

    async createList(createListDto : CreateListDto): Promise<List> {
        const {name, status} =  createListDto;

        const list = new List();
        list.name = name;
        list.status = status;
    
        await list.save();
    
        return list;
    }

}