import { IDomainError } from '../IDomainError';
import { Either } from './Either';

export type Result<T> = Either<
{ type: 'single'; error: IDomainError } | { type: 'multiple'; errors: IDomainError[] },
T
>;
