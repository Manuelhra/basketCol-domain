import { UserType } from '../../../shared/domain/value-objects/UserType';

export class RefereeUserType extends UserType {
  protected readonly TYPE: string;

  constructor() {
    const type: string = 'REFEREE_USER';

    super(type);
    this.TYPE = type;
  }

  public static getType(): string {
    return 'REFEREE_USER';
  }
}
