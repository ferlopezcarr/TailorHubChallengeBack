export interface CrudRepostory<T> {
    create(entity: T): Promise<T>;
    getAll(): Promise<T[]>;
    update(entity: T): Promise<T>;
    delete(entity: T): Promise<T>;
}