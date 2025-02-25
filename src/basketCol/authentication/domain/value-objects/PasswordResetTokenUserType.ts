import { StringValueObject } from '../../../shared/domain/value-objects/StringValueObject';
import { HostUserType } from '../../../users/host/domain/value-objects/HostUserType';
import { LeagueFounderUserType } from '../../../users/league-founder/domain/value-objects/LeagueFounderUserType';
import { PlayerUserType } from '../../../users/player/domain/value-objects/PlayerUserType';
import { RefereeUserType } from '../../../users/referee/domain/value-objects/RefereeUserType';
import { InvalidUserTypeError } from '../../../users/shared/domain/exceptions/InvalidUserTypeError';
import { TeamFounderUserType } from '../../../users/team-founder/domain/value-objects/TeamFounderUserType';

export class PasswordResetTokenUserType extends StringValueObject {
  private static readonly TYPE_LIST: string[] = [
    HostUserType.create().value,
    PlayerUserType.create().value,
    LeagueFounderUserType.create().value,
    TeamFounderUserType.create().value,
    RefereeUserType.create().value,
  ];

  private constructor(value: string) {
    super(value, 'userType');
    this.ensureIsValidType(value);
  }

  static create(value: string): PasswordResetTokenUserType {
    return new PasswordResetTokenUserType(value);
  }

  private ensureIsValidType(value: string): void {
    if (!PasswordResetTokenUserType.TYPE_LIST.includes(value)) {
      throw InvalidUserTypeError.create(value);
    }
  }
}
