import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { IImageValueObjectProps } from '../../shared/domain/value-objects/ImageValueObject';
import { ITeamPrimitives } from './ITeamPrimitives';
import { TeamCreatedAt } from './value-objects/TeamCreatedAt';
import { TeamGallery } from './value-objects/TeamGallery';
import { TeamGender } from './value-objects/TeamGender';
import { TeamId } from './value-objects/TeamId';
import { TeamMainImage } from './value-objects/TeamMainImage';
import { TeamOfficialName } from './value-objects/TeamOfficialName';
import { TeamUpdatedAt } from './value-objects/TeamUpdatedAt';
import { TeamTeamFounderUserId } from './value-objects/TeamTeamFounderUserId';
import { TeamLogo } from './value-objects/TeamLogo';

export class Team extends AggregateRoot<ITeamPrimitives> {
  readonly #officialName: TeamOfficialName;

  readonly #teamFounderUserId: TeamTeamFounderUserId;

  readonly #gender: TeamGender;

  readonly #logo: TeamLogo;

  readonly #mainImage: TeamMainImage;

  readonly #gallery: TeamGallery;

  private constructor(
    id: string,
    officialName: string,
    gender: string,
    logo: IImageValueObjectProps,
    mainImage: IImageValueObjectProps,
    gallery: { images: Array<IImageValueObjectProps> },
    teamFounderUserId: string,
    createdAt: string,
    updatedAt: string,
  ) {
    const teamId: TeamId = TeamId.create(id);
    const teamCreatedAt: TeamCreatedAt = TeamCreatedAt.create(createdAt);
    const teamUpdatedAt: TeamUpdatedAt = TeamUpdatedAt.create(updatedAt);

    super(teamId, teamCreatedAt, teamUpdatedAt);

    this.#officialName = TeamOfficialName.create(officialName);
    this.#gender = TeamGender.create(gender);
    this.#logo = TeamLogo.create(logo);
    this.#mainImage = TeamMainImage.create(mainImage);
    this.#gallery = TeamGallery.create(gallery);
    this.#teamFounderUserId = TeamTeamFounderUserId.create(teamFounderUserId);
  }

  public override get toPrimitives(): ITeamPrimitives {
    return {
      id: this.id.value,
      officialName: this.#officialName.value,
      gender: this.#gender.value,
      logo: this.#logo.value,
      mainImage: this.#mainImage.value,
      gallery: this.#gallery.galleryAsPrimitives,
      teamFounderUserId: this.#teamFounderUserId.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  public static override create(
    id: string,
    officialName: string,
    gender: string,
    logo: IImageValueObjectProps,
    mainImage: IImageValueObjectProps,
    gallery: { images: Array<IImageValueObjectProps> },
    teamFounderUserId: string,
    createdAt: string,
    updatedAt: string,
  ): Team {
    return new Team(
      id,
      officialName,
      gender,
      logo,
      mainImage,
      gallery,
      teamFounderUserId,
      createdAt,
      updatedAt,
    );
  }

  public static override fromPrimitives(
    id: string,
    officialName: string,
    gender: string,
    logo: IImageValueObjectProps,
    mainImage: IImageValueObjectProps,
    gallery: { images: Array<IImageValueObjectProps> },
    teamFounderUserId: string,
    createdAt: string,
    updatedAt: string,
  ): Team {
    return new Team(
      id,
      officialName,
      gender,
      logo,
      mainImage,
      gallery,
      teamFounderUserId,
      createdAt,
      updatedAt,
    );
  }
}
