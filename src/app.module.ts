import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ColocsModule } from './colocs/colocs.module';
import { AuthModule } from './auth/auth.module';
import { GroupsModule } from './groups/groups.module';
import { TasksModule } from './tasks/tasks.module';
import { ListsModule } from './lists/lists.module';
import { SpendsModule } from './spends/spends.module';

@Module({
  imports: [TypeOrmModule.forRoot(),ColocsModule, AuthModule, GroupsModule, TasksModule, ListsModule, SpendsModule],
  controllers: [],
  providers: [],
})
export class AppModule {

  constructor(private connection: Connection) {}
}
