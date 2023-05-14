export interface CrudRepostory<Entity, RepositoryDTO> {
    create(entity: Entity): Promise<RepositoryDTO>;
    getAll(): Promise<RepositoryDTO[]>;
    update(entity: Entity): Promise<RepositoryDTO>;
    delete(entity: Entity): Promise<RepositoryDTO>;
}