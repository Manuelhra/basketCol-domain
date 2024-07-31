import { BusinessDateService } from '../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../shared/domain/services/IdUniquenessValidatorService';
import { DateValueObject } from '../../../shared/domain/value-objects/DateValueObject';
import { HostUserValidationService } from '../../../users/host/domain/services/HostUserValidationService';
import { HostUserId } from '../../../users/host/domain/value-objects/HostUserId';
import { GymValidationService } from '../../gym/domain/services/GymValidationService';
import { GymId } from '../../gym/domain/value-objects/GymId';

import { Court } from '../domain/Court';
import { ICourt } from '../domain/ICourt';
import { CourtRepository } from '../domain/repository/CourtRepository';
import { CourtCreatedAt } from '../domain/value-objects/CourtCreatedAt';
import { CourtEstablishmentDate } from '../domain/value-objects/CourtEstablishmentDate';
import { CourtId } from '../domain/value-objects/CourtId';
import { CourtUpdatedAt } from '../domain/value-objects/CourtUpdatedAt';
import { CreateCourtDTO } from './dto/CreateCourtDTO';

export class CourtCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #hostUserValidationService: HostUserValidationService;

  readonly #gymValidationService: GymValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #courtRepository: CourtRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    hostUserValidationService: HostUserValidationService;
    gymValidationService: GymValidationService;
    businessDateService: BusinessDateService;
    courtRepository: CourtRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#hostUserValidationService = dependencies.hostUserValidationService;
    this.#gymValidationService = dependencies.gymValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#courtRepository = dependencies.courtRepository;
  }

  public async run(payload: CreateCourtDTO): Promise<void> {
    const {
      id,
      officialName,
      establishmentDate,
      surface,
      hoopHeight,
      registeredById,
      location,
      gymId,
    } = payload;

    const courtId: CourtId = new CourtId(id);
    const hostUserId: HostUserId = new HostUserId(registeredById, 'registeredById');
    const courtEstablishmentDate: CourtEstablishmentDate = new CourtEstablishmentDate(establishmentDate);
    const currentDate: DateValueObject = this.#businessDateService.getCurrentDate();

    await this.#idUniquenessValidatorService.ensureUniqueId<CourtId, ICourt, Court>(courtId);
    await this.#hostUserValidationService.ensureHostUserExists(hostUserId);
    this.#businessDateService.ensureNotGreaterThan<CourtEstablishmentDate, DateValueObject>(courtEstablishmentDate, currentDate);

    const courtCreatedAt: CourtCreatedAt = this.#businessDateService.getCurrentDate();
    const courtUpdatedAt: CourtUpdatedAt = this.#businessDateService.getCurrentDate();

    let gymIdValueObject: GymId | null = null;

    if (typeof gymId === 'string' && gymId !== undefined && gymId !== null) {
      gymIdValueObject = new GymId(gymId, 'gymId');

      await this.#gymValidationService.ensureGymExists(gymIdValueObject);
    }

    const court: Court = new Court(
      courtId.value,
      officialName,
      courtEstablishmentDate.value,
      surface,
      hoopHeight,
      hostUserId.value,
      location,
      gymIdValueObject === null ? gymIdValueObject : gymIdValueObject.value,
      courtCreatedAt.value,
      courtUpdatedAt.value,
    );

    return this.#courtRepository.save(court);
  }
}
