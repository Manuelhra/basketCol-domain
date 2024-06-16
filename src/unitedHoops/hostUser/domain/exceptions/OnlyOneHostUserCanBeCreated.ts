class OnlyOneHostUserCanBeCreated extends Error {
  constructor() {
    super('There should only be one host user');

    this.name = 'OnlyOneHostUserCanBeCreated';
  }
}

export default OnlyOneHostUserCanBeCreated;
