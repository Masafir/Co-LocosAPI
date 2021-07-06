import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListItemRepository } from './list-item.repository';
import { ListItemsController } from './list-items.controller';
import { ListItemsService } from './list-items.service';

@Module({
  imports: [TypeOrmModule.forFeature([ListItemRepository])],
  controllers: [ListItemsController],
  providers: [ListItemsService]
})
export class ListItemModule {}
