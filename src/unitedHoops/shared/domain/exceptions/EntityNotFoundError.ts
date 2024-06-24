class EntityNotFoundError extends Error {
  constructor(entityType: string, identifier: string | number) {
    const message = `Entity not found: ${entityType} with identifier '${identifier}' does not exist in the system.`;
    super(message);
    this.name = 'EntityNotFoundError';
  }
}

export default EntityNotFoundError;
