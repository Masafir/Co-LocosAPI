import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColocRepository } from './coloc.repository';
import { ColocsController } from './colocs.controller';
import { ColocsService } from './colocs.service';

@Module({
  imports: [TypeOrmModule.forFeature([ColocRepository])],
  controllers: [ColocsController],
  providers: [ColocsService]
})
export class ColocsModule {}
