# BasketCol Domain

[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![Domain-Driven Design](https://img.shields.io/badge/Architecture-DDD-orange.svg)](https://martinfowler.com/bliki/DomainDrivenDesign.html)
[![Hexagonal Architecture](https://img.shields.io/badge/Architecture-Hexagonal-purple.svg)](https://alistair.cockburn.us/hexagonal-architecture/)

A TypeScript domain library for basketball competition management system following Domain-Driven Design (DDD) principles and hexagonal architecture.

## Overview

BasketCol Domain is the core business logic layer of a comprehensive basketball competition management system. It provides domain entities, value objects, services, and repository interfaces for managing basketball leagues, teams, players, facilities, and competitions.

## Architecture

### Domain-Driven Design (DDD)

The library follows DDD principles with clear separation of concerns:

- **Domain Entities**: Core business objects that encapsulate state and behavior
- **Value Objects**: Immutable objects that describe characteristics of domain entities
- **Aggregate Roots**: Entity clusters with defined boundaries and consistency rules
- **Domain Services**: Business logic that doesn't naturally fit within entities
- **Repository Interfaces**: Contracts for data persistence without implementation details

### Hexagonal Architecture

The codebase implements hexagonal architecture (ports and adapters):

- **Domain Layer**: Pure business logic with no external dependencies
- **Repository Interfaces**: Ports for data access
- **Domain Services**: Application-specific business rules
- **Value Objects**: Encapsulated validation and business rules

## Bounded Contexts

The domain is organized into the following bounded contexts:

### 🔐 Authentication
- Password reset token management
- User authentication primitives

### 🏆 Competitions
- **League Management**: League creation, configuration, and administration
- **Season Management**: League seasons with start/end dates and court assignments
- **Fixture Management**: Game scheduling and fixture organization
- **Game Management**: Individual game tracking with scores and statistics
- **Awards System**: Season-end awards and recognition

### 🏢 Facilities
- **Courts**: Basketball court registration and management
- **Gyms**: Gymnasium facilities and specifications
- **Shared Facility Logic**: Common facility attributes and behaviors

### 👥 Teams
- **Team Management**: Team creation, configuration, and administration
- **Player Registration**: Team-player relationships and roster management
- **Statistics Tracking**: All-time team performance statistics

### 👤 Users
- **Player Users**: Player profiles, attributes, and career statistics
- **Host Users**: Event and facility host management
- **League Founder Users**: League creation and administration
- **Team Founder Users**: Team creation and management
- **Referee Users**: Game officiating and referee management
- **Shared User Logic**: Common user attributes and authentication

## Core Domain Patterns

### Aggregate Root Pattern

All domain entities extend the `AggregateRoot` base class:

```typescript
export abstract class AggregateRoot<I extends IAggregateRootPrimitives> {
  private readonly _id: UuidValueObject;
  private readonly _createdAt: DateValueObject;
  private readonly _updatedAt: DateValueObject;

  public abstract get toPrimitives(): I;
  public static create(...args: any[]): AggregateRoot<any>;
  public static fromPrimitives(...args: any[]): AggregateRoot<any>;
}
```

### Value Object Pattern

All value objects extend the `ValueObject` base class with validation:

```typescript
export abstract class ValueObject<T> {
  readonly #value: T;
  
  protected constructor(
    value: T,
    propertyName: string,
    expectedType: string,
    options?: ValueObjectOptions
  );
  
  public get value(): T;
  public equals(other: unknown): boolean;
}
```

### Repository Pattern

Data access follows the repository pattern with interfaces:

```typescript
export interface IEntityRepository {
  save(entity: Entity): Promise<void>;
  findById(id: EntityId): Promise<Entity | null>;
  // Domain-specific query methods
}
```

## Directory Structure

```
src/
├── basketCol/
│   ├── authentication/           # Authentication domain
│   ├── competitions/            # Competition management
│   │   ├── league/             # League management
│   │   │   ├── season/         # Season management
│   │   │   └── league-team/    # Team-league relationships
│   │   └── shared/             # Shared competition logic
│   ├── facilities/             # Facility management
│   │   ├── court/             # Basketball courts
│   │   ├── gym/               # Gymnasium facilities
│   │   └── shared/            # Shared facility logic
│   ├── team/                  # Team management
│   │   ├── team-player/       # Player-team relationships
│   │   └── all-time-stats/    # Team statistics
│   ├── users/                 # User management
│   │   ├── player/            # Player users
│   │   ├── host/              # Host users
│   │   ├── league-founder/    # League founder users
│   │   ├── team-founder/      # Team founder users
│   │   ├── referee/           # Referee users
│   │   └── shared/            # Shared user logic
│   └── shared/                # Shared domain logic
│       ├── domain/            # Base classes and common logic
│       ├── exceptions/        # Domain exceptions
│       ├── services/          # Domain services
│       └── value-objects/     # Common value objects
└── main/
    └── index.ts              # Main export file
```

### Entity Structure Pattern

Each domain entity follows a consistent structure:

```
entity/
├── domain/
│   ├── Entity.ts                    # Main aggregate root
│   ├── IEntityPrimitives.ts         # Data transfer interface
│   ├── exceptions/                  # Domain-specific errors
│   │   ├── SpecificError.ts
│   │   └── index.ts
│   ├── repository/                  # Data access interfaces
│   │   └── IEntityRepository.ts
│   ├── services/                    # Domain business logic
│   │   ├── EntityValidationDomainService.ts
│   │   └── index.ts
│   └── value-objects/               # Entity-specific value objects
│       ├── EntityProperty.ts
│       └── index.ts
```

## Key Features

### Type Safety
- Full TypeScript support with strict type checking
- Generic type parameters for entity primitives
- Comprehensive error handling with typed exceptions

### Validation
- Value object validation on construction
- Domain service validation for complex business rules
- Type-safe primitive validation

### Error Handling
- Structured domain errors with field-specific information
- Either/Result types for operation results
- Comprehensive exception hierarchy

### Extensibility
- Interface-based repository pattern
- Pluggable domain services
- Modular bounded context design

## Installation

```bash
npm install @basketcol/domain
```

## Usage

### Creating Domain Entities

```typescript
import { League, LeagueName, LeagueLocation } from '@basketcol/domain';

// Create a new league
const league = League.create(
  LeagueName.create('Professional Basketball League'),
  LeagueLocation.create('New York, NY'),
  // ... other required parameters
);

// Convert to primitives for serialization
const primitives = league.toPrimitives();

// Recreate from primitives
const recreatedLeague = League.fromPrimitives(primitives);
```

### Using Value Objects

```typescript
import { TeamOfficialName, TeamId } from '@basketcol/domain';

// Value objects provide validation
const teamName = TeamOfficialName.create('Los Angeles Lakers');
const teamId = TeamId.create('550e8400-e29b-41d4-a716-446655440000');

// Value objects are immutable and comparable
const sameName = TeamOfficialName.create('Los Angeles Lakers');
console.log(teamName.equals(sameName)); // true
```

### Implementing Repositories

```typescript
import { ITeamRepository, Team, TeamId } from '@basketcol/domain';

class TeamRepository implements ITeamRepository {
  async save(team: Team): Promise<void> {
    // Implementation details
  }

  async findById(id: TeamId): Promise<Team | null> {
    // Implementation details
  }
}
```

## Development

### Prerequisites
- Node.js 18+
- TypeScript 5.4.5+

### Scripts

```bash
# Compile TypeScript in watch mode
npm run tsc

# Single build compilation
tsc --build

# Linting
npx eslint src/
```

### Build Configuration

The project uses TypeScript with the following key settings:

- **Target**: ES2021
- **Module**: CommonJS
- **Strict Mode**: Enabled
- **Experimental Decorators**: Enabled
- **Output Directory**: `./build/`
- **Types Directory**: `./build/types/`

## Testing

The project structure supports comprehensive testing:

- Unit tests for value objects and entities
- Integration tests for domain services
- Repository interface testing

## Contributing

1. Follow the established directory structure
2. Maintain DDD and hexagonal architecture principles
3. Implement proper validation in value objects
4. Add comprehensive error handling
5. Update index.ts exports appropriately
6. Follow TypeScript best practices

## Naming Conventions

- **Interfaces**: Prefixed with `I` (e.g., `ITeamRepository`)
- **Value Objects**: Suffixed with property name (e.g., `TeamOfficialName`)
- **Domain Services**: Suffixed with `DomainService` (e.g., `TeamValidationDomainService`)
- **Exceptions**: Suffixed with `Error` (e.g., `TeamNotFoundError`)
- **Primitives**: Suffixed with `Primitives` (e.g., `ITeamPrimitives`)

## Package Information

- **Package**: `@basketcol/domain`
- **Version**: 10.5.26
- **Author**: Manuel Rivera (manuelh_ra)
- **Email**: manuelhra.dev@gmail.com
- **Main**: `build/main/index.js`
- **Types**: `build/types/main/index.d.ts`

## License

This project is part of the BasketCol basketball competition management system.