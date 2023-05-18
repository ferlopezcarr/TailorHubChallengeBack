export class EntityNotFoundException extends Error {
  private static readonly defaultMessage = "Entity not found";
  constructor() {
    super(EntityNotFoundException.defaultMessage);
  }
}
