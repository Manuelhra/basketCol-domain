import { NullableString } from '../../../../shared/domain/value-objects/NullableString';

export abstract class FixtureName extends NullableString {
  protected constructor(value: string | null) {
    super(value, 'name');
  }
}
