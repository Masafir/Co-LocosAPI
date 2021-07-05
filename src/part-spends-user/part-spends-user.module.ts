import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartSpendUserRepository } from './part-spend.user.repository';
import { PartSpendsUserController } from './part-spends-user.controller';
import { PartSpendsUserService } from './part-spends-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([PartSpendUserRepository])],
  controllers: [PartSpendsUserController],
  providers: [PartSpendsUserService]
})
export class PartSpendsUserModule {}
