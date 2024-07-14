import UuidValueObject from '../../../../../../shared/domain/value-objects/UuidValueObject';

class DefensiveAttributesId extends UuidValueObject {
  constructor(value: string) {
    super(value, 'id');
  }
}

export default DefensiveAttributesId;
