import { DomainError } from '../DomainError';
import { Either } from './Either';

export type Result<T> = Either<
{ type: 'single'; error: DomainError } | { type: 'multiple'; errors: DomainError[] },
T
>;
