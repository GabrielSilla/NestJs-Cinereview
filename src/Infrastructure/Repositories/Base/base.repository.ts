/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ObjectID } from "bson";
import { Db } from "mongodb";
import { IBaseRepository } from "src/Domain/interfaces/repositories/ibase.repository";

@Injectable()
export class BaseRepository<T> implements IBaseRepository<T> {
    constructor(protected db: Db, public collection: string) {
    }

    async getAll(): Promise<Array<T>> {
        const response = await this.db.collection(this.collection).find();
        return response.map(t => t as T).toArray();
    }

    async getByIdAsync(id: ObjectID): Promise<T> {
        const response = await this.db.collection(this.collection).findOne({ _id: id });
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