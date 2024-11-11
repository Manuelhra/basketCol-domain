import { IdValueObject } from '../../../../../../shared/domain/value-objects/IdValueObject';

export class LSABestAssistProviderId extends IdValueObject {
  private constructor(value: string) {
    super(value, 'bestAssistProviderId');
  }

  public static create(value: string): LSABestAssistProviderId {
    return new LSABestAssistProviderId(value);
  }
}
