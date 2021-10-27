/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Movie } from '../../Domain/models/movie';
import { MovieService } from '../../Domain/services/movie.service';

@Controller('movies')
export class MoviesController {
  
  constructor(private readonly movieService: MovieService) {}

  @Post('create')
  async createMovie(@Body() movie: Movie): Promise<Movie> {
    console.log(movie);
    return await this.movieService.createMovie(movie);
  }

  @Get('list')
  async getMovies(): Promise<Array<Movie>> {
    return await this.movieService.getMovies();
  }

  @Get('id/:id')
  async getMovieById(@Param('id') id: string): Promise<Movie> {
    return await this.movieService.getMovieById(id);
  }

  @Patch('update')
  async updateMovie(@Body() movie: Movie): Promise<Movie> {
    return await this.movieService.updateMovie(movie);
  }

  @Delete('delete/:id')
  async deleteMovieById(@Param('id') id: string): Promise<void> {
    return await this.movieService.deleteMovieById(id);
  }
}
