/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Body, Controller, Post } from '@nestjs/common';
import { AsyncFunctions } from './exopromise.decorator';

@Controller('exopromise')
export class ExopromiseController {
  @Post()
  apply(@Body() body: any): Promise<any> {
    const { key, args } = body;
    return AsyncFunctions[key].call(this, ...Object.values(args));
  }
}
