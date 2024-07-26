import { ValueObject } from '../../../../shared/domain/value-objects/ValueObject';
import { EmptyCourtIdListError } from '../exceptions/EmptyCourtIdListError';
import { InvalidCourtIdListElementError } from '../exceptions/InvalidCourtIdListElementError';
import { CourtId } from './CourtId';

export abstract class CourtIdList extends ValueObject<CourtId[]> {
  protected constructor(value: string[]) {
    const courtIdList: CourtId[] = value.map((courtId: string) => new CourtId(courtId));

    super(courtIdList, 'courtIdList', 'array of CourtId');

    this.ensureCourtIdListIsNotEmpty(courtIdList);
    this.ensureAllAreCourtIds(courtIdList);
  }

  public get courtIdListAsStrings(): string[] {
    return this.value.map((courtId: CourtId) => courtId.value);
  }

  private ensureCourtIdListIsNotEmpty(courtIdList: CourtId[]): void {
    if (courtIdList.length === 0) {
      throw new EmptyCourtIdListError();
    }
  }

  private ensureAllAreCourtIds(courtIdList: CourtId[]): void {
    if (!courtIdList.every((courtId: CourtId) => courtId instanceof CourtId)) {
      throw new InvalidCourtIdListElementError();
    }
  }
}
