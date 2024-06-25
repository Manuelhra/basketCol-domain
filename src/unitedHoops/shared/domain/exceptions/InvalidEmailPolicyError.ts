class InvalidEmailPolicyError extends Error {
  constructor(email: string) {
    const message = `The email "${email}" violates the domain policy`;
    super(message);
    this.name = 'InvalidEmailPolicyError';
  }
}

export default InvalidEmailPolicyError;
