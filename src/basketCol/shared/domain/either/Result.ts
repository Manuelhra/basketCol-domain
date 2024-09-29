import { DomainError } from '../DomainError';
import { Either } from './Either';

export type Result<T> = Either<DomainError, T>;
