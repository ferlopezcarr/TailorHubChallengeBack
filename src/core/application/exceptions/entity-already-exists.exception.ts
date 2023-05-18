export class EntityAlreadyExistsException extends Error {
  private static readonly defaultMessage = "Entity already exists";
  constructor() {
    super(EntityAlreadyExistsException.defaultMessage);
  }
}
