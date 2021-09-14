import { EntityRepository, Repository } from "typeorm";
import { Coloc } from "./coloc.entity";
import { CreateColocDto } from "./dto/create-coloc.dto";
import { UpdateColocDto } from "./dto/update-coloc.dto";

@EntityRepository(Coloc)
export class ColocRepository extends Repository<Coloc> {
    async createColoc(createColocDto: CreateColocDto): Promise<Coloc> {
        const {name} = createColocDto;
        const coloc = new Coloc();
        coloc.name = name;

        await coloc.save();
        return coloc;
    }

    async updateColoc(updateColocDto: UpdateColocDto): Promise<Coloc> {
        const {id, name} = updateColocDto;
        const coloc = await this.findOne(id);

        coloc.name = name;
        await coloc.save();
        return coloc;
    }

    async deleteColoc(id: string){
        await Coloc.delete(id);
    }
}