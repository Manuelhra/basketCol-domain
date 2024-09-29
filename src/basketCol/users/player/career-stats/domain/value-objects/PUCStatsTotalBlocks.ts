import { StatsTotalBlocks } from '../../../../../shared/domain/value-objects/StatsTotalBlocks';

export class PUCStatsTotalBlocks extends StatsTotalBlocks {
  private constructor(value: number) {
    super(value);
  }

  public static create(value: number): PUCStatsTotalBlocks {
    return new PUCStatsTotalBlocks(value);
  }
}
