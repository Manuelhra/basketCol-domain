import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { ICourt } from './ICourt';
import { CourtCreatedAt } from './value-objects/CourtCreatedAt';
import { CourtEstablishmentDate } from './value-objects/CourtEstablishmentDate';
import { CourtHoopHeight } from './value-objects/CourtHoopHeight';
import { CourtId } from './value-objects/CourtId';
import { CourtOfficialName } from './value-objects/CourtOfficialName';
import { CourtSurface } from './value-objects/CourtSurface';
import { CourtUpdatedAt } from './value-objects/CourtUpdatedAt';

export class Court extends AggregateRoot<ICourt> {
  readonly #officialName: CourtOfficialName;

  readonly #establishmentDate: CourtEstablishmentDate;

  readonly #surface: CourtSurface;

  readonly #hoopHeight: CourtHoopHeight;

  constructor(
    id: string,
    officialName: string,
    establishmentDate: string,
    surface: string,
    hoopHeight: number,
    createdAt: string,
    updatedAt: string,
  ) {
    const courtId: CourtId = new CourtId(id);
    const courtCreatedAt: CourtCreatedAt = new CourtCreatedAt(createdAt);
    const courtUpdatedAt: CourtUpdatedAt = new CourtCreatedAt(updatedAt);

    super(courtId, courtCreatedAt, courtUpdatedAt);

    this.#officialName = new CourtOfficialName(officialName);
    this.#establishmentDate = new CourtEstablishmentDate(establishmentDate);
    this.#surface = new CourtSurface(surface);
    this.#hoopHeight = new CourtHoopHeight(hoopHeight);
  }

  public toPrimitives(): ICourt {
    return {
      id: this.id.value,
      officialName: this.#officialName.value,
      establishmentDate: this.#establishmentDate.value,
      surface: this.#surface.value,
      hoopHeight: this.#hoopHeight.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
