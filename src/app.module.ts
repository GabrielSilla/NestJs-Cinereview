/* eslint-disable prettier/prettier */
import { CacheModule, Module } from '@nestjs/common';
import { MoviesController } from './API/controller/movies.controller';
import { IMovieRepository } from './Domain/interfaces/repositories/imovie.repository';
import { MovieService } from './Domain/services/movie.service';
import { DatabaseModule } from './Infrastructure/Database/database.module';
import { RedisModule } from './Infrastructure/Database/redis.module';
import { MovieRepository } from './Infrastructure/Repositories/movie.repository';

@Module({
  imports: [
    DatabaseModule,
    RedisModule
  ],
  controllers: [MoviesController],
  providers: [
    MovieService,
    { provide: IMovieRepository, useClass: MovieRepository }
  ],
})
export class AppModule {}
