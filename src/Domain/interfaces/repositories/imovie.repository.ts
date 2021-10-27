/* eslint-disable prettier/prettier */
import { Movie } from "src/Domain/models/movie";
import { IBaseRepository } from "./ibase.repository";

export abstract class IMovieRepository extends IBaseRepository<Movie> {}