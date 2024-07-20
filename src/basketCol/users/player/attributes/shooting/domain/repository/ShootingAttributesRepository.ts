import ShootingAttributes from '../ShootingAttributes';

export interface ShootingAttributesRepository {
  save(shootingAttributes: ShootingAttributes): Promise<void>;
}
