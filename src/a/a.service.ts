import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { BService } from 'src/b/b.service';

@Injectable()
export class AService {
  constructor(
    @Inject(forwardRef(() => BService)) private readonly bService: BService,
  ) {}

  hello() {
    return this.bService.hello();
  }
}

console.log({ BService }, 'forcing a circular dependency here');
