import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Get('random')
  async getRandomJoke(@Query('type') type: string) {
    if (!type) {
      throw new HttpException('Type query parameter is required', HttpStatus.BAD_REQUEST);
    }
    try {
      const joke = await this.jokesService.getRandomJokeByType(type);
      return joke;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('types')
  async getTypes() {
    return this.jokesService.getAvailableJokeTypes();
  }
}
