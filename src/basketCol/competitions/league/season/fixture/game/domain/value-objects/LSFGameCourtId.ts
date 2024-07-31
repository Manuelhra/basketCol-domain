import { GameReferencedCourtId } from '../../../../../../shared/domain/value-object/GameReferencedCourtId';

export class LSFGameCourtId extends GameReferencedCourtId {
  public constructor(value: string) {
    super(value);
  }
}
