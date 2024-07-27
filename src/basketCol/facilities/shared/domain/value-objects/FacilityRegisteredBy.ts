import { ReferencedHostUserId } from '../../../../shared/domain/value-objects/ReferencedHostUserId';

export abstract class FacilityRegisteredBy extends ReferencedHostUserId {
  protected constructor(value: string) {
    super(value, 'registeredById');
  }
}
