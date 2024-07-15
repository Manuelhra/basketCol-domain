import DateValueObject from './DateValueObject';

class UpdatedAtValueObject extends DateValueObject {
  constructor(value: string) {
    super(value, 'updatedAt');
  }
}

export default UpdatedAtValueObject;
