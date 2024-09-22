import { CentimeterHeightValueObject } from '../../../../shared/domain/value-objects/CentimeterHeightValueObject';
import { InvalidCourtHoopHeightError } from '../exceptions/InvalidCourtHoopHeightError';

export class CourtHoopHeight extends CentimeterHeightValueObject {
  static readonly MIN_HEIGHT = 300 as const;

  static readonly MAX_HEIGHT = 310 as const;

  static readonly STANDARD_HEIGHT = 305 as const;

  constructor(value: number) {
    super(value, 'hoopHeight');
    this.ensureIsValidHoopHeight(value);
  }

  public static create(height: number): CourtHoopHeight {
    return new CourtHoopHeight(height);
  }

  private ensureIsValidHoopHeight(height: number): void {
    if (height < CourtHoopHeight.MIN_HEIGHT || height > CourtHoopHeight.MAX_HEIGHT) {
      throw new InvalidCourtHoopHeightError(height, CourtHoopHeight.MIN_HEIGHT, CourtHoopHeight.MAX_HEIGHT);
    }
  }

  public static createStandard(): CourtHoopHeight {
    return new CourtHoopHeight(CourtHoopHeight.STANDARD_HEIGHT);
  }
}
