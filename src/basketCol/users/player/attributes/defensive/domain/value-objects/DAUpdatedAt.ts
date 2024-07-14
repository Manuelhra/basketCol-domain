import DateValueObject from '../../../../../../shared/domain/value-objects/DateValueObject';

class DAUpdatedAt extends DateValueObject {
  constructor(value: string) {
    super(value, 'updatedAt');
  }
}

export default DAUpdatedAt;
