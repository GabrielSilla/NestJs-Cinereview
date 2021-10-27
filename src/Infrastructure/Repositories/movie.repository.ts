/* eslint-disable prettier/prettier */
import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Db } from "mongodb";
import { IMovieRepository } from "src/Domain/interfaces/repositories/imovie.repository";
import { Movie } from "src/Domain/models/movie";
import { BaseRepository } from "./Base/base.repository";
import { Cache } from 'cache-manager';

@Injectable()
export class MovieRepository extends BaseRepository<Movie> implements IMovieRepository {
    constructor(@Inject(CACHE_MANAGER) public cacheManager: Cache,
                @Inject('DATABASE_CONNECTION') public db: Db) {
        super(cacheManager, db, "movies");
    }    
}