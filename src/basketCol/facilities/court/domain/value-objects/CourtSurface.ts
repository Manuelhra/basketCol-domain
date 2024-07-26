import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';
import { InvalidCourtSurfaceError } from '../exceptions/InvalidCourtSurfaceError';

export class CourtSurface extends StringValueObject {
  static readonly #VALID_SURFACES: readonly string[] = [
    'WOOD',
    'SYNTHETIC',
    'ACRYLIC',
    'RUBBER',
    'ASPHALT',
    'CONCRETE',
    'MODULAR',
    'TERRAZZO',
  ] as const;

  constructor(value: string) {
    const upperCaseValue = value.toUpperCase();
    super(upperCaseValue, 'surface');

    CourtSurface.ensureIsValidSurface(upperCaseValue);
  }

  public get validSurfaces(): readonly string[] {
    return CourtSurface.#VALID_SURFACES;
  }

  private static ensureIsValidSurface(surface: string): void {
    const upperCaseSurface = surface.toUpperCase();
    if (!CourtSurface.#VALID_SURFACES.includes(upperCaseSurface)) {
      throw new InvalidCourtSurfaceError(surface, CourtSurface.#VALID_SURFACES);
    }
  }
}
