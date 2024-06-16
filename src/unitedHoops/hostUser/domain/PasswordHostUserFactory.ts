import PasswordValueObjectFactory from '../../shared/domain/PasswordValueObjectFactory';

class PasswordHostUserFactory extends PasswordValueObjectFactory {
  protected readonly regex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  protected requirements: string[] = [
    'At least 8 characters in length.',
    'At least one uppercase or lowercase letter.',
    'At least one numeric digit.',
    'At least one special character from [@ $!%*#?&].',
  ];
}

export default PasswordHostUserFactory;
