import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpendRepository } from './spend.repository';
import { SpendsController } from './spends.controller';
import { SpendsService } from './spends.service';

@Module({
  imports: [TypeOrmModule.forFeature([SpendRepository])],
  controllers: [SpendsController],
  providers: [SpendsService]
})
export class SpendsModule {}
