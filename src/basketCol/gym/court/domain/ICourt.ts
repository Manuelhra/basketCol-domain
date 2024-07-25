import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';

export interface ICourt extends IAggregateRoot {
  officialName: string;
  surface: string;
  hoopHeight: { value: number; unit: string };
  establishmentDate: string;
  registeredById: string;
}
