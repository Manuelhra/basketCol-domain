import DateValueObject from '../../../../shared/domain/value-objects/DateValueObject';

class UserCreatedAt extends DateValueObject {
  constructor(value: string) {
    super(value, 'createdAt');
  }
}

export default UserCreatedAt;
