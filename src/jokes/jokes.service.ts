import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Joke, JokeDocument } from './schemas/joke.schema';
import { Model } from 'mongoose';

@Injectable()
export class JokesService {
  constructor(@InjectModel(Joke.name) private jokeModel: Model<JokeDocument>) {}

  async getRandomJokeByType(type: string): Promise<Joke> {
    const jokes = await this.jokeModel.find({ type }).exec();
    if (jokes.length === 0) {
      throw new Error(`No jokes found for type: ${type}`);
    }
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }

  async getAvailableJokeTypes(): Promise<string[]> {
    return this.jokeModel.distinct('type').exec();
  }
}
