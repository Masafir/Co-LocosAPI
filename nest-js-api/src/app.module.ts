import { Module } from '@nestjs/common';
import { ColocsModule } from './colocs/colocs.module';

@Module({
  imports: [ColocsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
