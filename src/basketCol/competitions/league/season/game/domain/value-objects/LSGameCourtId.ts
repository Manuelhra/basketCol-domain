import { GameReferencedCourtId } from '../../../../../shared/domain/value-object/GameReferencedCourtId';

export class LSGameCourtId extends GameReferencedCourtId {
  public constructor(value: string) {
    super(value);
  }
}
