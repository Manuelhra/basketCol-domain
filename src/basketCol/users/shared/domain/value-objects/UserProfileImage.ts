import { DateValueObject } from '../../../../shared/domain/value-objects/DateValueObject';
import { StringValueObject } from '../../../../shared/domain/value-objects/StringValueObject';
import { ValueObject } from '../../../../shared/domain/value-objects/ValueObject';

export interface IUserProfileImageProps {
  url: string;
  updatedAt: string;
}

export abstract class UserProfileImage extends ValueObject<IUserProfileImageProps> {
  protected constructor(value: IUserProfileImageProps) {
    super(value, 'profileImage', '{ url: string; updatedAt: string; }');

    this.#ensureIsValidUpdatedAt(value.updatedAt);
    this.#ensureIsValidUrl(value.updatedAt);
  }

  #ensureIsValidUpdatedAt(value: string): void {
    DateValueObject.ensureIsValidDate(value);
  }

  #ensureIsValidUrl(value: string): void {
    StringValueObject.ensureValueTypeIsCorrect(value, 'url');
  }
}
