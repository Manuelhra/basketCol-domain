# BasketCol Domain

[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![Domain-Driven Design](https://img.shields.io/badge/Architecture-DDD-orange.svg)](https://martinfowler.com/bliki/DomainDrivenDesign.html)
[![Hexagonal Architecture](https://img.shields.io/badge/Architecture-Hexagonal-purple.svg)](https://alistair.cockburn.us/hexagonal-architecture/)

Una biblioteca de dominio TypeScript para un sistema de gestión de competiciones de baloncesto que sigue los principios del Diseño Dirigido por Dominio (DDD) y arquitectura hexagonal.

## Descripción General

BasketCol Domain es la capa de lógica de negocio central de un sistema integral de gestión de competiciones de baloncesto. Proporciona entidades de dominio, objetos de valor, servicios e interfaces de repositorio para gestionar ligas de baloncesto, equipos, jugadores, instalaciones y competiciones.

## Arquitectura

### Diseño Dirigido por Dominio (DDD)

La biblioteca sigue los principios de DDD con clara separación de responsabilidades:

- **Entidades de Dominio**: Objetos de negocio centrales que encapsulan estado y comportamiento
- **Objetos de Valor**: Objetos inmutables que describen características de las entidades de dominio
- **Raíces de Agregado**: Clústeres de entidades con límites definidos y reglas de consistencia
- **Servicios de Dominio**: Lógica de negocio que no encaja naturalmente dentro de las entidades
- **Interfaces de Repositorio**: Contratos para persistencia de datos sin detalles de implementación

### Arquitectura Hexagonal

El código implementa arquitectura hexagonal (puertos y adaptadores):

- **Capa de Dominio**: Lógica de negocio pura sin dependencias externas
- **Interfaces de Repositorio**: Puertos para acceso a datos
- **Servicios de Dominio**: Reglas de negocio específicas de la aplicación
- **Objetos de Valor**: Validación encapsulada y reglas de negocio

## Contextos Delimitados

El dominio está organizado en los siguientes contextos delimitados:

### 🔐 Autenticación
- Gestión de tokens de restablecimiento de contraseña
- Primitivas de autenticación de usuario

### 🏆 Competiciones
- **Gestión de Ligas**: Creación, configuración y administración de ligas
- **Gestión de Temporadas**: Temporadas de liga con fechas de inicio/fin y asignación de canchas
- **Gestión de Jornadas**: Programación de partidos y organización de jornadas
- **Gestión de Partidos**: Seguimiento de partidos individuales con puntuaciones y estadísticas
- **Sistema de Premios**: Premios de fin de temporada y reconocimientos

### 🏢 Instalaciones
- **Canchas**: Registro y gestión de canchas de baloncesto
- **Gimnasios**: Instalaciones de gimnasios y especificaciones
- **Lógica Compartida de Instalaciones**: Atributos y comportamientos comunes de instalaciones

### 👥 Equipos
- **Gestión de Equipos**: Creación, configuración y administración de equipos
- **Registro de Jugadores**: Relaciones equipo-jugador y gestión de plantillas
- **Seguimiento de Estadísticas**: Estadísticas de rendimiento de toda la historia del equipo

### 👤 Usuarios
- **Usuarios Jugadores**: Perfiles de jugadores, atributos y estadísticas de carrera
- **Usuarios Anfitriones**: Gestión de anfitriones de eventos e instalaciones
- **Usuarios Fundadores de Liga**: Creación y administración de ligas
- **Usuarios Fundadores de Equipo**: Creación y gestión de equipos
- **Usuarios Árbitros**: Arbitraje de partidos y gestión de árbitros
- **Lógica Compartida de Usuarios**: Atributos comunes de usuarios y autenticación

## Patrones de Dominio Fundamentales

### Patrón Raíz de Agregado

Todas las entidades de dominio extienden la clase base `AggregateRoot`:

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

### Patrón Objeto de Valor

Todos los objetos de valor extienden la clase base `ValueObject` con validación:

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

### Patrón Repositorio

El acceso a datos sigue el patrón repositorio con interfaces:

```typescript
export interface IEntityRepository {
  save(entity: Entity): Promise<void>;
  findById(id: EntityId): Promise<Entity | null>;
  // Métodos de consulta específicos del dominio
}
```

## Estructura de Directorios

```
src/
├── basketCol/
│   ├── authentication/           # Dominio de autenticación
│   ├── competitions/            # Gestión de competiciones
│   │   ├── league/             # Gestión de ligas
│   │   │   ├── season/         # Gestión de temporadas
│   │   │   └── league-team/    # Relaciones equipo-liga
│   │   └── shared/             # Lógica compartida de competiciones
│   ├── facilities/             # Gestión de instalaciones
│   │   ├── court/             # Canchas de baloncesto
│   │   ├── gym/               # Instalaciones de gimnasios
│   │   └── shared/            # Lógica compartida de instalaciones
│   ├── team/                  # Gestión de equipos
│   │   ├── team-player/       # Relaciones jugador-equipo
│   │   └── all-time-stats/    # Estadísticas de equipos
│   ├── users/                 # Gestión de usuarios
│   │   ├── player/            # Usuarios jugadores
│   │   ├── host/              # Usuarios anfitriones
│   │   ├── league-founder/    # Usuarios fundadores de liga
│   │   ├── team-founder/      # Usuarios fundadores de equipo
│   │   ├── referee/           # Usuarios árbitros
│   │   └── shared/            # Lógica compartida de usuarios
│   └── shared/                # Lógica de dominio compartida
│       ├── domain/            # Clases base y lógica común
│       ├── exceptions/        # Excepciones de dominio
│       ├── services/          # Servicios de dominio
│       └── value-objects/     # Objetos de valor comunes
└── main/
    └── index.ts              # Archivo principal de exportación
```

### Patrón de Estructura de Entidad

Cada entidad de dominio sigue una estructura consistente:

```
entity/
├── domain/
│   ├── Entity.ts                    # Raíz de agregado principal
│   ├── IEntityPrimitives.ts         # Interfaz de transferencia de datos
│   ├── exceptions/                  # Errores específicos del dominio
│   │   ├── SpecificError.ts
│   │   └── index.ts
│   ├── repository/                  # Interfaces de acceso a datos
│   │   └── IEntityRepository.ts
│   ├── services/                    # Lógica de negocio del dominio
│   │   ├── EntityValidationDomainService.ts
│   │   └── index.ts
│   └── value-objects/               # Objetos de valor específicos de la entidad
│       ├── EntityProperty.ts
│       └── index.ts
```

## Características Clave

### Seguridad de Tipos
- Soporte completo de TypeScript con verificación estricta de tipos
- Parámetros de tipo genérico para primitivas de entidad
- Manejo integral de errores con excepciones tipadas

### Validación
- Validación de objetos de valor en la construcción
- Validación de servicios de dominio para reglas de negocio complejas
- Validación de primitivas con seguridad de tipos

### Manejo de Errores
- Errores de dominio estructurados con información específica de campo
- Tipos Either/Result para resultados de operaciones
- Jerarquía integral de excepciones

### Extensibilidad
- Patrón repositorio basado en interfaces
- Servicios de dominio conectables
- Diseño modular de contextos delimitados

## Instalación

```bash
npm install @basketcol/domain
```

## Uso

### Creación de Entidades de Dominio

```typescript
import { League, LeagueName, LeagueLocation } from '@basketcol/domain';

// Crear una nueva liga
const league = League.create(
  LeagueName.create('Liga Profesional de Baloncesto'),
  LeagueLocation.create('Madrid, España'),
  // ... otros parámetros requeridos
);

// Convertir a primitivas para serialización
const primitives = league.toPrimitives();

// Recrear desde primitivas
const recreatedLeague = League.fromPrimitives(primitives);
```

### Uso de Objetos de Valor

```typescript
import { TeamOfficialName, TeamId } from '@basketcol/domain';

// Los objetos de valor proporcionan validación
const teamName = TeamOfficialName.create('Real Madrid Baloncesto');
const teamId = TeamId.create('550e8400-e29b-41d4-a716-446655440000');

// Los objetos de valor son inmutables y comparables
const sameName = TeamOfficialName.create('Real Madrid Baloncesto');
console.log(teamName.equals(sameName)); // true
```

### Implementación de Repositorios

```typescript
import { ITeamRepository, Team, TeamId } from '@basketcol/domain';

class TeamRepository implements ITeamRepository {
  async save(team: Team): Promise<void> {
    // Detalles de implementación
  }

  async findById(id: TeamId): Promise<Team | null> {
    // Detalles de implementación
  }
}
```

## Desarrollo

### Prerrequisitos
- Node.js 18+
- TypeScript 5.4.5+

### Scripts

```bash
# Compilar TypeScript en modo watch
npm run tsc

# Compilación de una sola vez
tsc --build

# Linting
npx eslint src/
```

### Configuración de Build

El proyecto usa TypeScript con las siguientes configuraciones clave:

- **Target**: ES2021
- **Module**: CommonJS
- **Modo Estricto**: Habilitado
- **Decoradores Experimentales**: Habilitado
- **Directorio de Salida**: `./build/`
- **Directorio de Tipos**: `./build/types/`

## Pruebas

La estructura del proyecto soporta pruebas integrales:

- Pruebas unitarias para objetos de valor y entidades
- Pruebas de integración para servicios de dominio
- Pruebas de interfaces de repositorio

## Contribución

1. Sigue la estructura de directorios establecida
2. Mantén los principios de DDD y arquitectura hexagonal
3. Implementa validación apropiada en objetos de valor
4. Agrega manejo integral de errores
5. Actualiza las exportaciones index.ts apropiadamente
6. Sigue las mejores prácticas de TypeScript

## Convenciones de Nomenclatura

- **Interfaces**: Prefijadas con `I` (ej., `ITeamRepository`)
- **Objetos de Valor**: Sufijadas con el nombre de la propiedad (ej., `TeamOfficialName`)
- **Servicios de Dominio**: Sufijadas con `DomainService` (ej., `TeamValidationDomainService`)
- **Excepciones**: Sufijadas con `Error` (ej., `TeamNotFoundError`)
- **Primitivas**: Sufijadas con `Primitives` (ej., `ITeamPrimitives`)

## Información del Paquete

- **Paquete**: `@basketcol/domain`
- **Versión**: 10.5.26
- **Autor**: Manuel Rivera (manuelh_ra)
- **Email**: manuelhra.dev@gmail.com
- **Main**: `build/main/index.js`
- **Types**: `build/types/main/index.d.ts`

## Licencia

Este proyecto es parte del sistema de gestión de competiciones de baloncesto BasketCol.