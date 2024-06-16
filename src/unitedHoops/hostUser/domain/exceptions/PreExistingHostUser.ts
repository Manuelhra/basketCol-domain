class PreExistingHostUser extends Error {
  constructor() {
    super('The host user has already been created.');

    this.name = 'PreExistingHostUser';
  }
}

export default PreExistingHostUser;
