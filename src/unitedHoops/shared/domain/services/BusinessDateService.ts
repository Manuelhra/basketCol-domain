import DateValueObject from '../value-objects/DateValueObject';

class BusinessDateService {
  public getCurrentDate(propertyName: string): DateValueObject {
    const now = new Date();
    const dateString = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    return new DateValueObject(dateString, propertyName);
  }

  public formatDate(date: Date, propertyName: string): DateValueObject {
    const dateString = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    return new DateValueObject(dateString, propertyName);
  }
}

export default BusinessDateService;
