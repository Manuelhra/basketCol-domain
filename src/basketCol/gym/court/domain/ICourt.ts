import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';

export interface ICourt extends IAggregateRoot {
  officialName: string;
  establishmentDate: string;
  surface: string;
  hoopHeight: { value: number; unit: string };
}
