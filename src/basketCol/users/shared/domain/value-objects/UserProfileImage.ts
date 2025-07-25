import { IImageValueObjectProps, ImageValueObject } from '../../../../shared/domain/value-objects/ImageValueObject';

export abstract class UserProfileImage extends ImageValueObject {
  protected constructor(value: IImageValueObjectProps) {
    super(value, 'UserProfileImage');
  }
}
