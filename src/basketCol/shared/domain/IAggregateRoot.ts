interface IAuditableEntity {
  createdAt: Date;
  updatedAt: Date;
}

export interface IAggregateRoot extends IAuditableEntity {
  id: string;
}
