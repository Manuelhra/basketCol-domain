interface IAuditableEntity {
  createdAt: string;
  updatedAt: string;
}

export interface IAggregateRootPrimitives extends IAuditableEntity {
  id: string;
}
