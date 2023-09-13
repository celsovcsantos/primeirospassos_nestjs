import { Controller, Get, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  //constructor(private readonly catsService: CatsService) {}
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
