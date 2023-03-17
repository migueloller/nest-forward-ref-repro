import { Controller, Get } from '@nestjs/common';
import { AService } from './a/a.service';

@Controller()
export class AppController {
  constructor(private readonly aService: AService) {}

  @Get()
  getHello(): string {
    return this.aService.hello();
  }
}
