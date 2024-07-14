interface IAuditableEntity {
  createdAt: string;
  updatedAt: string;
}

export interface IAggregateRoot extends IAuditableEntity {
  id: string;
}
