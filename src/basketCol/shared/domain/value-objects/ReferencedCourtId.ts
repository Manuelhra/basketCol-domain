import { CourtId } from '../../../facilities/court/domain/value-objects/CourtId';
import { InvalidCourtIdInstanceError } from '../exceptions/InvalidCourtIdInstanceError';
import { ValueObject } from './ValueObject';

export abstract class ReferencedCourtId extends ValueObject<CourtId> {
  protected constructor(value: string, propertyName: string = 'courtId') {
    const courtId: CourtId = new CourtId(value);

    super(courtId, propertyName, 'string');

    ReferencedCourtId.ensureIsCourtId(courtId);
  }

  public get courtIdAsString(): string {
    return this.value.value;
  }

  private static ensureIsCourtId(value: CourtId): void {
    if (!(value instanceof CourtId)) {
      throw new InvalidCourtIdInstanceError();
    }
  }
}
