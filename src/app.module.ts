import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { Connection } from 'typeorm';
import { ColocsModule } from './colocs/colocs.module';
import { UserModule } from './user/user.module';
import { GroupsModule } from './groups/groups.module';
import { TasksModule } from './tasks/tasks.module';
import { ListsModule } from './lists/lists.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig),ColocsModule, UserModule, GroupsModule, TasksModule, ListsModule],
  controllers: [],
  providers: [],
})
export class AppModule {

  constructor(private connection: Connection) {}
}
