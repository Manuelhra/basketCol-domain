import { IAggregateRoot } from '../../../shared/domain/IAggregateRoot';

export interface ICourt extends IAggregateRoot {
  officialName: string;
  establishmentDate: string;
  surface: string;
  hoopHeight: { value: number; unit: string };

  // Veriicar
  status: string;
  imageUrl: string[];
}

// TODO: Validar si debo crar un value object de Heigth para manejar todas las alturas por centimetros
// TODO: Crear un sistema de rating, es decir value object rating en carpete shared y ver como se usa
