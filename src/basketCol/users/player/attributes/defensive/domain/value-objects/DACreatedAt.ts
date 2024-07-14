import DateValueObject from '../../../../../../shared/domain/value-objects/DateValueObject';

class DACreatedAt extends DateValueObject {
  constructor(value: string) {
    super(value, 'createdAt');
  }
}

export default DACreatedAt;
