import { EntityRepository, Repository } from "typeorm";
import { CreateSpendDto } from "./dto/create-spend.dto";
import { Spend } from "./spend.entity";

@EntityRepository(Spend)
export class SpendRepository extends Repository<Spend> {

    async createSpend(createSpendDto : CreateSpendDto): Promise<Spend> {
        const {name, value , status} =  createSpendDto;

        const spend = new Spend();
        spend.name = name;
        spend.value = value;
        spend.status = status;
    
        await spend.save();
    
        return spend;
    }

}