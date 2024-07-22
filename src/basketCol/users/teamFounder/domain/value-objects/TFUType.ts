import { UserType } from '../../../shared/domain/value-objects/UserType';

export class TFUType extends UserType {
  readonly TYPE: string;

  constructor() {
    const type: string = 'TEAM_FOUNDER_USER';

    super(type);
    this.TYPE = type;
  }
}
