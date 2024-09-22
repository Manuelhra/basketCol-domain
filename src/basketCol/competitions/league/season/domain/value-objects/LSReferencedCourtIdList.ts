import { ReferencedCourtIdList } from '../../../../../shared/domain/value-objects/ReferencedCourtIdList';

export class LSReferencedCourtIdList extends ReferencedCourtIdList {
  public constructor(value: string[]) {
    super(value);
  }

  public static create(value: string[]): LSReferencedCourtIdList {
    return new LSReferencedCourtIdList(value);
  }
}
