import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ColocsModule } from './colocs/colocs.module';

@Module({
  imports: [TypeOrmModule.forRoot(),ColocsModule],
  controllers: [],
  providers: [],
})
export class AppModule {

  constructor(private connection: Connection) {}
}
