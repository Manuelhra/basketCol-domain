class MultipleHostUsersException extends Error {
  constructor() {
    super('Uniqueness constraint violated: attempt to create multiple host users');

    this.name = 'MultipleHostUsersException';
  }
}

export default MultipleHostUsersException;
