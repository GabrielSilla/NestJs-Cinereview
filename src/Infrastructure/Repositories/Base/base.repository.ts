/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ObjectID } from "bson";
import { Db } from "mongodb";
import { IBaseRepository } from "src/Domain/interfaces/repositories/ibase.repository";
import { Cache } from 'cache-manager';

@Injectable()
export class BaseRepository<T> implements IBaseRepository<T> {
    constructor(protected cacheManager: Cache, protected db: Db, public collection: string) {
    }

    async getAll(): Promise<Array<T>> {
        const key = `getAll${this.collection}`;
        const value = await this.cacheManager.get(key);

        if(value) return value as Array<T>;

        const response = await this.db.collection(this.collection).find();
        const convertedList = await response.map(t => t as T).toArray();

        await this.cacheManager.set(key, convertedList, { ttl: 300 });
        return convertedList;
    }

    async getByIdAsync(id: ObjectID): Promise<T> {
        const key = `getByIdAsync${this.collection}`;
        const value = await this.cacheManager.get(key) as T;

        if(value) return value;
        
        const response = await this.db.collection(this.collection).findOne({ _id: id });
        await this.cacheManager.set(key, response, { ttl: 300 });

        return response as T;
    }

    async insertAsync(entity: T): Promise<T> {
        console.log(entity);
        await this.db.collection(this.collection).insertOne(entity);
        return entity;
    }

    async updateAsync(entity: T, id: ObjectID): Promise<T> {
        await this.db.collection(this.collection).updateOne({ _id: id }, entity);
        return entity;
    }

    async deleteAsync(entity: T, id: ObjectID): Promise<void> {
        await this.db.collection(this.collection).deleteOne({ _id: id }, entity);
        return;
    }
}