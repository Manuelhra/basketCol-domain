import ValueObject from './ValueObject';

abstract class ObjectValueObject<T extends Object> extends ValueObject<T> {}
export default ObjectValueObject;
