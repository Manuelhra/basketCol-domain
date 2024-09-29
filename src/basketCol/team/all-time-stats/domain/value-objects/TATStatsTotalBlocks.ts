import { StatsTotalBlocks } from '../../../../shared/domain/value-objects/StatsTotalBlocks';

export class TATStatsTotalBlocks extends StatsTotalBlocks {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): TATStatsTotalBlocks {
    return new TATStatsTotalBlocks(value);
  }
}
