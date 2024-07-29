import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class InvalidGameTypeError extends RootError {
  constructor(
    private readonly invalidType: string,
    private readonly validTypes: readonly string[],
  ) {
    super(`Invalid game type: '${invalidType}'. Valid types are: ${validTypes.join(', ')}.`);
    this.name = 'InvalidGameTypeError';
  }

  public getInvalidType(): string {
    return this.invalidType;
  }

  public getValidTypes(): readonly string[] {
    return this.validTypes;
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
