class OfficialNameMinLengthNotMetError extends Error {
  constructor() {
    super('Official name does not meet minimum length requirement');

    this.name = 'OfficialNameMinLengthNotMetError';
  }
}

export default OfficialNameMinLengthNotMetError;
