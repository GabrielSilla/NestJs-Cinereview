/* eslint-disable prettier/prettier */
import { Inject, Injectable } from "@nestjs/common";
import { Db } from "mongodb";
import { IMovieRepository } from "src/Domain/interfaces/repositories/imovie.repository";
import { Movie } from "src/Domain/models/movie";
import { BaseRepository } from "./Base/base.repository";

@Injectable()
export class MovieRepository extends BaseRepository<Movie> implements IMovieRepository {
    constructor(@Inject('DATABASE_CONNECTION') public db: Db) {
        super(db, "movies");
    }    
}