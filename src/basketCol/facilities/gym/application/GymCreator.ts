import { BusinessDateService } from '../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../shared/domain/services/IdUniquenessValidatorService';
import { DateValueObject } from '../../../shared/domain/value-objects/DateValueObject';
import { HostUserValidationService } from '../../../users/host/domain/services/HostUserValidationService';
import { HostUserId } from '../../../users/host/domain/value-objects/HostUserId';
import { Gym } from '../domain/Gym';
import { IGym } from '../domain/IGym';
import { GymRepository } from '../domain/repository/GymRepository';
import { GymCreatedAt } from '../domain/value-objects/GymCreatedAt';
import { GymEstablishmentDate } from '../domain/value-objects/GymEstablishmentDate';
import { GymId } from '../domain/value-objects/GymId';
import { GymUpdatedAt } from '../domain/value-objects/GymUpdatedAt';
import { GymCreatorPayload } from './GymCreatorPayload';

export class GymCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #hostUserValidationService: HostUserValidationService;

  readonly #businessDateService: BusinessDateService;

  readonly #gymRepository: GymRepository;

  constructor(dependencies: {
    idUniquenessValidatorService: IdUniquenessValidatorService;
    hostUserValidationService: HostUserValidationService;
    businessDateService: BusinessDateService;
    gymRepository: GymRepository;
  }) {
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#hostUserValidationService = dependencies.hostUserValidationService;
    this.#businessDateService = dependencies.businessDateService;
    this.#gymRepository = dependencies.gymRepository;
  }

  public async run(payload: GymCreatorPayload): Promise<void> {
    const {
      id,
      officialName,
      location,
      establishmentDate,
      registeredById,
    } = payload;
    const gymId: GymId = new GymId(id);
    const hostUserId: HostUserId = new HostUserId(registeredById);
    const gymEstablishmentDate: GymEstablishmentDate = new GymEstablishmentDate(establishmentDate);
    const currentDate: DateValueObject = this.#businessDateService.getCurrentDate();

    await this.#idUniquenessValidatorService.ensureUniqueId<GymId, IGym, Gym>(gymId);
    await this.#hostUserValidationService.ensureHostUserExists(hostUserId);
    this.#businessDateService.ensureNotGreaterThan<GymEstablishmentDate, DateValueObject>(gymEstablishmentDate, currentDate);

    const gymCreatedAt: GymCreatedAt = this.#businessDateService.getCurrentDate();
    const gymUpdatedAt: GymUpdatedAt = this.#businessDateService.getCurrentDate();

    const gym: Gym = new Gym(
      gymId.value,
      officialName,
      location,
      gymEstablishmentDate.value,
      hostUserId.value,
      gymCreatedAt.value,
      gymUpdatedAt.value,
    );

    return this.#gymRepository.save(gym);
  }
}
