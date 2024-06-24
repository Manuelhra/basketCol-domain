class DuplicateIdError extends Error {
  constructor(id: string | number) {
    const message = `Uniqueness constraint violation: ID '${id}' already exists in the system.`;
    super(message);
    this.name = 'IdAlreadyExistsException';
  }
}

export default DuplicateIdError;
