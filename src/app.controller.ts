import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return "Welcome to the RPG dos Brodi's API";
  }
}
