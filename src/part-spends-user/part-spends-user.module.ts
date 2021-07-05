import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartSpendUserRepository } from './part-spend.user.repository';
import { PartSpendUsersController } from './part-spends-user.controller';
import { PartSpendUserService } from './part-spends-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([PartSpendUserRepository])],
  controllers: [PartSpendUsersController],
  providers: [PartSpendUserService]
})
export class PartSpendsUserModule {}
