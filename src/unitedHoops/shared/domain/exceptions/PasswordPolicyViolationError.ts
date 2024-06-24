class PasswordPolicyViolationError extends Error {
  constructor(message: string = "The password does not comply with the domain's security policies") {
    super(message);
    this.name = 'PasswordPolicyViolationError';
  }
}

export default PasswordPolicyViolationError;
