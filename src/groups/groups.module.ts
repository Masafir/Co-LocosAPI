import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupRepository } from './Group.repository';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

@Module({
  imports: [TypeOrmModule.forFeature([GroupRepository])],
  controllers: [GroupsController],
  providers: [GroupsService]
})
export class GroupsModule {}
