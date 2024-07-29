import { ReferencedCourtId } from '../../../../shared/domain/value-objects/ReferencedCourtId';

export abstract class GameReferencedCourtId extends ReferencedCourtId {
  protected constructor(value: string) {
    super(value, 'courtId');
  }
}
