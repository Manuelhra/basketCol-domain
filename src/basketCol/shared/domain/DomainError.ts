import { IDomainErrorPrimitives } from './IDomainErrorPrimitives';

export class DomainError {
  readonly #name: string;

  readonly #message: string;

  readonly #field?: string;

  private constructor(name: string, message: string, field?: string) {
    this.#name = name;
    this.#message = message;
    this.#field = field;
  }

  get toPrimitives(): IDomainErrorPrimitives {
    return {
      name: this.#name,
      message: this.#message,
      field: this.#field,
    };
  }

  public static createSingle(name: string, message: string, field?: string): DomainError {
    return new DomainError(name, message, field);
  }

  public static createMultiple(errors: DomainError[]): DomainError[] {
    return errors;
  }
}
