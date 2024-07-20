import { DateValueObject } from '../value-objects/DateValueObject';

interface CreateDateValueObject {
  run<T extends DateValueObject>(parsedDate: string): T;
}

export class BusinessDateService {
  readonly #createDateValueObject: CreateDateValueObject;

  constructor(dependencies: {
    createDateValueObject: CreateDateValueObject,
  }) {
    this.#createDateValueObject = dependencies.createDateValueObject;
  }

  public getCurrentDate<T extends DateValueObject>(): T {
    const now = new Date();
    const dateString = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    return this.#createDateValueObject.run<T>(dateString);
  }

  public formatDate<T extends DateValueObject>(date: Date): T {
    const dateString = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    return this.#createDateValueObject.run<T>(dateString);
  }
}

