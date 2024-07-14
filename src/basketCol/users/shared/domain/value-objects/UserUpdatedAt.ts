import DateValueObject from '../../../../shared/domain/value-objects/DateValueObject';

class UserUpdatedAt extends DateValueObject {
  constructor(value: string) {
    super(value, 'updatedAt');
  }
}

export default UserUpdatedAt;
