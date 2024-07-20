import { ValueObject } from './ValueObject';

export type Primitives = string | number | boolean | Boolean;

export abstract class PrimitiveValueObject<T extends Primitives> extends ValueObject<T> {}
