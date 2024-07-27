import { ReferencedPlayerUserId } from '../../../../../../shared/domain/value-objects/ReferencedPlayerUserId';

export class LSABestAssistProviderId extends ReferencedPlayerUserId {
  public constructor(value: string) {
    super(value, 'bestAssistProviderId');
  }
}
