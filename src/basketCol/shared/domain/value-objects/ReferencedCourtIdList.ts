import { CourtId } from '../../../facilities/court/domain/value-objects/CourtId';
import { EmptyCourtIdListError } from '../exceptions/EmptyCourtIdListError';
import { InvalidCourtIdListElementError } from '../exceptions/InvalidCourtIdListElementError';
import { ValueObject } from './ValueObject';

export abstract class ReferencedCourtIdList extends ValueObject<CourtId[]> {
  protected constructor(value: string[]) {
    const courtIdList: CourtId[] = value.map((courtId: string) => CourtId.create(courtId));

    super(courtIdList, 'courtIdList', 'array of CourtId');

    this.ensureCourtIdListIsNotEmpty(courtIdList);
    this.ensureAllAreCourtIds(courtIdList);
  }

  public get courtIdListAsStrings(): string[] {
    return this.value.map((courtId: CourtId) => courtId.value);
  }

  private ensureCourtIdListIsNotEmpty(courtIdList: CourtId[]): void {
    if (courtIdList.length === 0) {
      throw EmptyCourtIdListError.create();
    }
  }

  private ensureAllAreCourtIds(courtIdList: CourtId[]): void {
    if (!courtIdList.every((courtId: CourtId) => courtId instanceof CourtId)) {
      throw InvalidCourtIdListElementError.create();
    }
  }
}
