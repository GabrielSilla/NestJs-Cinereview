import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Movie } from '../../Domain/models/movie';
import { MovieService } from '../../Domain/services/movie.service';

@Controller('movies')
export class AppController {
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
}
