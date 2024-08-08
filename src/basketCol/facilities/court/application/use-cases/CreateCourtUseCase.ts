import { BusinessDateService } from '../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../shared/domain/services/IdUniquenessValidatorService';
import { DateValueObject } from '../../../../shared/domain/value-objects/DateValueObject';
import { HostUserValidationService } from '../../../../users/host/domain/services/HostUserValidationService';
import { GymValidationService } from '../../../gym/domain/services/GymValidationService';
import { Court } from '../../domain/Court';
import { ICourt } from '../../domain/ICourt';
import { ICourtRepository } from '../../domain/repository/ICourtRepository';
import { CourtCreatedAt } from '../../domain/value-objects/CourtCreatedAt';
import { CourtEstablishmentDate } from '../../domain/value-objects/CourtEstablishmentDate';
import { CourtId } from '../../domain/value-objects/CourtId';
import { CourtNullableFacilityId } from '../../domain/value-objects/CourtNullableFacilityId';
import { CourtRegisteredById } from '../../domain/value-objects/CourtRegisteredById';
import { CourtUpdatedAt } from '../../domain/value-objects/CourtUpdatedAt';
import { CreateCourtDTO } from '../dto/CreateCourtDTO';

export class CreateCourtUseCase {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #hostUserValidationService: HostUserValidationService;

  readonly #gymValidationService: GymValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #courtRepository: ICourtRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    hostUserValidationService: HostUserValidationService;
    gymValidationService: GymValidationService;
    businessDateService: BusinessDateService;
    courtRepository: ICourtRepository;
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
    const courtRegisteredById: CourtRegisteredById = new CourtRegisteredById(registeredById);
    const courtEstablishmentDate: CourtEstablishmentDate = new CourtEstablishmentDate(establishmentDate);
    const currentDate: DateValueObject = this.#businessDateService.getCurrentDate();

    await this.#idUniquenessValidatorService.ensureUniqueId<CourtId, ICourt, Court>(courtId);
    await this.#hostUserValidationService.ensureHostUserExists(courtRegisteredById.value);
    this.#businessDateService.ensureNotGreaterThan<CourtEstablishmentDate, DateValueObject>(courtEstablishmentDate, currentDate);

    const courtCreatedAt: CourtCreatedAt = this.#businessDateService.getCurrentDate();
    const courtUpdatedAt: CourtUpdatedAt = this.#businessDateService.getCurrentDate();

    const courtNullableFacilityId: CourtNullableFacilityId = new CourtNullableFacilityId(gymId);

    if (courtNullableFacilityId.value !== null) {
      await this.#gymValidationService.ensureGymExists(courtNullableFacilityId.value);
    }

    const court: Court = new Court(
      courtId.value,
      officialName,
      courtEstablishmentDate.value,
      surface,
      hoopHeight,
      courtRegisteredById.hostUserIdAsString,
      location,
      courtNullableFacilityId.facilityIdAsStringOrNull,
      courtCreatedAt.value,
      courtUpdatedAt.value,
    );

    return this.#courtRepository.save(court);
  }
}
