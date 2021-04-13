import { Module } from '@nestjs/common';
import { ColocsController } from './colocs.controller';
import { ColocsService } from './colocs.service';

@Module({
  controllers: [ColocsController],
  providers: [ColocsService]
})
export class ColocsModule {}
