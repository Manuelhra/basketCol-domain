import { GymId } from '../../../facilities/gym/domain/value-objects/GymId';
import { EmptyGymIdListError } from '../exceptions/EmptyGymIdListError';
import { InvalidGymIdListElementError } from '../exceptions/InvalidGymIdListElementError';

import { ValueObject } from './ValueObject';

export abstract class ReferencedGymIdList extends ValueObject<GymId[]> {
  protected constructor(value: string[]) {
    const gymIdList: GymId[] = value.map((gymId: string) => GymId.create(gymId));

    super(gymIdList, 'gymIdList', 'array of GymId');

    this.ensureGymIdListIsNotEmpty(gymIdList);
    this.ensureAllAreGymIds(gymIdList);
  }

  public get gymIdListAsStrings(): string[] {
    return this.value.map((gymId: GymId) => gymId.value);
  }

  private ensureGymIdListIsNotEmpty(gymIdList: GymId[]): void {
    if (gymIdList.length === 0) {
      throw new EmptyGymIdListError();
    }
  }

  private ensureAllAreGymIds(gymIdList: GymId[]): void {
    if (!gymIdList.every((gymId: GymId) => gymId instanceof GymId)) {
      throw new InvalidGymIdListElementError();
    }
  }
}
