import DateValueObject from './DateValueObject';

class CreatedAtValueObject extends DateValueObject {
  constructor(value: string) {
    super(value, 'createdAt');
  }
}

export default CreatedAtValueObject;
