class MinimumLengthNotMetError extends Error {
  constructor(label: string) {
    super(`${label} does not meet minimum length requirement`);

    this.name = 'MinimumLengthNotMetError';
  }
}

export default MinimumLengthNotMetError;
