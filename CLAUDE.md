# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Build and Development
- `npm run tsc` - Compile TypeScript in watch mode
- `tsc --build` - Single build compilation
- ESLint is configured but no script is defined - use `npx eslint` directly

### TypeScript Configuration
- Output directory: `./build/`
- Types directory: `./build/types/`
- Strict mode enabled with experimental decorators
- Target: ES2021, Module: CommonJS

## Architecture Overview

This is a Domain-Driven Design (DDD) TypeScript library for a basketball competition management system called "basketCol". The codebase follows hexagonal architecture principles with strict separation of concerns.

### Core Domain Structure

The domain is organized into the following bounded contexts:

1. **Authentication** - Password reset tokens and authentication primitives
2. **Competitions** - League management, seasons, fixtures, and games
3. **Facilities** - Courts, gyms, and other basketball facilities
4. **Teams** - Team management, players, and statistics
5. **Users** - Different user types (players, hosts, referees, league founders, team founders)

### Key Architectural Patterns

#### Domain Layer Structure
Each domain entity follows a consistent pattern:
- **Domain Entity** - Core business logic (extends AggregateRoot)
- **Value Objects** - Immutable data structures with validation
- **Primitives Interface** - Data transfer objects for serialization
- **Repository Interface** - Data access contracts
- **Domain Services** - Business logic coordination
- **Exceptions** - Domain-specific error handling

#### Base Classes
- `AggregateRoot<I>` - Base class for domain entities with id, createdAt, updatedAt
- `ValueObject<T>` - Base class for value objects with validation and equality
- `DomainError` - Structured error handling with field-specific information

#### Shared Domain Components
Located in `src/basketCol/shared/domain/`:
- Common value objects (UUID, Date, String, Integer, etc.)
- Base exceptions and error handling
- Either/Result types for error handling
- Business domain services
- HTTP status codes

### Domain Entity Patterns

#### Aggregate Root Pattern
```typescript
export class EntityName extends AggregateRoot<IEntityPrimitives> {
  // Static factory methods
  public static create(...): EntityName
  public static fromPrimitives(...): EntityName
  
  // Domain behavior methods
  public get toPrimitives(): IEntityPrimitives
}
```

#### Value Object Pattern
```typescript
export class PropertyName extends ValueObjectBase<type> {
  constructor(value: type) {
    super(value, 'propertyName', 'expectedType');
  }
}
```

#### Repository Pattern
All repositories follow the interface pattern:
```typescript
export interface IEntityRepository {
  save(entity: Entity): Promise<void>;
  findById(id: EntityId): Promise<Entity | null>;
  // Other domain-specific methods
}
```

### Directory Structure Logic

- `domain/` - Core domain logic
  - `Entity.ts` - Main aggregate root
  - `IEntityPrimitives.ts` - Data transfer interface
  - `exceptions/` - Domain-specific errors
  - `repository/` - Data access interfaces
  - `services/` - Domain business logic
  - `value-objects/` - Immutable data structures with validation

### Code Conventions

1. **Naming Conventions**:
   - Interfaces prefixed with `I`
   - Value objects suffixed with property name
   - Domain services suffixed with `DomainService`
   - Exceptions suffixed with `Error`

2. **Error Handling**:
   - Domain errors extend base exception classes
   - Validation errors are thrown during value object construction
   - Use Either/Result types for operation results

3. **Validation**:
   - Value objects validate on construction
   - Domain services handle complex business rule validation
   - Primitive validation in value object base classes

### Working with the Codebase

When adding new features:
1. Identify the correct bounded context
2. Follow the established directory structure
3. Create value objects for new properties
4. Implement domain entities with proper validation
5. Define repository interfaces for data access
6. Add domain services for complex business logic
7. Update index.ts exports appropriately

When modifying existing code:
1. Maintain the existing patterns and conventions
2. Update related value objects and primitives interfaces
3. Ensure proper error handling and validation
4. Keep domain logic separated from infrastructure concerns