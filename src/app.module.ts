import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AService } from './a/a.service';
import { BService } from './b/b.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AService, BService],
})
export class AppModule {}
