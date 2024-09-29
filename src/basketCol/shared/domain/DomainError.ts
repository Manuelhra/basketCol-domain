import { IDomainError } from './IDomainError';

export class DomainError {
  readonly #name: string;

  readonly #message: string;

  readonly #code: number;

  constructor(name: string, message: string, code: number) {
    this.#name = name;
    this.#message = message;
    this.#code = code;
  }

  get toPrimitives(): IDomainError {
    return {
      name: this.#name,
      message: this.#message,
      code: this.#code,
    };
  }

  public static create(name: string, message: string, code: number): DomainError {
    return new DomainError(name, message, code);
  }
}
