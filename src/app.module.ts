import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { Connection } from 'typeorm';
import { ColocsModule } from './colocs/colocs.module';
import { UserModule } from './user/user.module';
import { GroupsModule } from './groups/groups.module';
import { TasksModule } from './tasks/tasks.module';
import { ListsModule } from './lists/lists.module';
import { SpendsModule } from './spends/spends.module';
import { PartSpendsUserModule } from './part-spends-user/part-spends-user.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig),ColocsModule, UserModule, GroupsModule, TasksModule, ListsModule, SpendsModule, PartSpendsUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {

  constructor(private connection: Connection) {}
}
