/* eslint-disable prettier/prettier */
import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './API/controller/app.controller';
import { IMovieRepository } from './Domain/interfaces/repositories/imovie.repository';
import { MovieService } from './Domain/services/movie.service';
import { DatabaseModule } from './Infrastructure/Database/database.module';
import { MovieRepository } from './Infrastructure/Repositories/movie.repository';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    DatabaseModule,
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379
    }),
  ],
  controllers: [AppController],
  providers: [
    MovieService,
    { provide: IMovieRepository, useClass: MovieRepository }
  ],
})
export class AppModule {}
