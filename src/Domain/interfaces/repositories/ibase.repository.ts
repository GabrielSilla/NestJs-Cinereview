/* eslint-disable prettier/prettier */
import { ObjectID } from "bson";

export abstract class IBaseRepository<T> {
    public getAll: () => Promise<Array<T>>;
    public getByIdAsync: (id: ObjectID) => Promise<T>;
    public insertAsync: (entity: T) => Promise<T> ;
    public updateAsync: (entity: T, id: ObjectID) => Promise<T>;
    public deleteAsync: (id: ObjectID) => Promise<void>;
}