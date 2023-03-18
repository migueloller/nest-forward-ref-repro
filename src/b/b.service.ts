import { Injectable, Scope } from '@nestjs/common';
import { AService } from 'src/a/a.service';

@Injectable({ scope: Scope.REQUEST })
export class BService {
  hello() {
    return 'Hello, B!';
  }
}

console.log({ AService }, 'forcing a circular dependency here');
