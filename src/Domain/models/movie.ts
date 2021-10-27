/* eslint-disable prettier/prettier */
import { BaseEntity } from "./base/baseEntity";

export class Movie extends BaseEntity{
    name: string;
    year: number;
    description: string;
}