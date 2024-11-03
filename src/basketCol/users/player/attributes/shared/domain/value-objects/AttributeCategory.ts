import { AggregateRoot } from '../../../../../../shared/domain/AggregateRoot';
import { IAggregateRootPrimitives } from '../../../../../../shared/domain/IAggregateRootPrimitives';

export abstract class AttributeCategory<IAttributesCategoryPrimitives extends IAggregateRootPrimitives> extends AggregateRoot<IAttributesCategoryPrimitives> {}
