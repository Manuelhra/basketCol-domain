import { ShootingAttributes } from '../ShootingAttributes';

export interface IShootingAttributesRepository {
  save(shootingAttributes: ShootingAttributes): Promise<void>;
}
