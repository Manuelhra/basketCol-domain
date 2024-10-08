import { IHostUserPrimitives } from '../../host/domain/IHostUserPrimitives';
import { ILeagueFounderUserPrimitives } from '../../league-founder/domain/ILeagueFounderUserPrimitives';
import { IPlayerUserPrimitives } from '../../player/domain/IPlayerUserPrimitives';
import { IRefereeUserPrimitives } from '../../referee/domain/IRefereeUserPrimitives';
import { ITeamFounderUserPrimitives } from '../../team-founder/domain/ITeamFounderUserPrimitives';

export type IAnySystemUserTypePrimitives = IHostUserPrimitives | IPlayerUserPrimitives | IRefereeUserPrimitives | ILeagueFounderUserPrimitives | ITeamFounderUserPrimitives;
