import { AggregateRoot } from "../../shared/domain/AggregateRoot";
import { ITeam } from "./ITeam";

export class Team extends AggregateRoot<ITeam> {
  public toPrimitives(): ITeam {
    return {
      id: '',
      createdAt: '',
      updatedAt: '',
    }
  }
}