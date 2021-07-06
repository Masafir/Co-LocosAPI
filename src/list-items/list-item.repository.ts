import { EntityRepository, Repository } from "typeorm";
import { CreateListItemDto } from "./dto/create-list-item.dto";
import { ListItem } from "./list-item.entity";

@EntityRepository(ListItem)
export class ListItemRepository extends Repository<ListItem> {

    async createListItem(createListItemDto : CreateListItemDto): Promise<ListItem> {
        const {name, quantity, status} =  createListItemDto;

        const listItem = new ListItem();
        listItem.name = name;
        listItem.quantity = quantity;
        listItem.status = status;
    
        await listItem.save();
    
        return listItem;
    }

}