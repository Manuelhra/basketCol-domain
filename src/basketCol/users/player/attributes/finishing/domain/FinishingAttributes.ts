import AggregateRoot from '../../../../../shared/domain/AggregateRoot';
import PlayerUserId from '../../../domain/value-objects/PlayerUserId';
import { IFinishingAttributes } from './IFinishingAttributes';
import FADrivingDunk from './value-objects/FADrivingDunk';
import FADrivingLayup from './value-objects/FADrivingLayup';
import FAPostControl from './value-objects/FAPostControl';
import FAStandingDunk from './value-objects/FAStandingDunk';

class FinishingAttributes extends AggregateRoot<IFinishingAttributes> {
  readonly #drivingLayup: FADrivingLayup;

  readonly #drivingDunk: FADrivingDunk;

  readonly #standingDunk: FAStandingDunk;

  readonly #postControl: FAPostControl;

  readonly #playerUserId: PlayerUserId;
}

export default FinishingAttributes;
