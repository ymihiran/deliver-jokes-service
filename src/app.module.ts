import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JokesModule } from './jokes/jokes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    JokesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
