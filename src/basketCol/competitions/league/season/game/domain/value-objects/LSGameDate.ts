import { GameDate } from '../../../../../shared/domain/value-object/GameDate';

export class LSGameDate extends GameDate {
  public constructor(value: string) {
    super(value);
  }
}
