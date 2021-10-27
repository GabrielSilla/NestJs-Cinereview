/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ObjectID } from 'bson';
import { IMovieRepository } from '../interfaces/repositories/imovie.repository';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {

  constructor(private movieRepo: IMovieRepository) {}

  async createMovie(movie: Movie): Promise<Movie> {
    return await this.movieRepo.insertAsync(movie);
  }

  async getMovies(): Promise<Array<Movie>> {
    return await this.movieRepo.getAll();
  }

  async getMovieById(id: string): Promise<Movie> {
    return await this.movieRepo.getByIdAsync(new ObjectID(id));
  }

  async updateMovie(movie: Movie): Promise<Movie> {
    return await this.movieRepo.updateAsync(movie, movie.id);
  }

  async deleteMovieById(id: string): Promise<void> {
    return await this.movieRepo.deleteAsync(new ObjectID(id));
  }
}
