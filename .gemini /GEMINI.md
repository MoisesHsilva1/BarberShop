# Project: Barbershop

## General Instructions

* This project is a barbershop management and appointment scheduling platform.
* Follow the existing architecture and coding patterns before introducing new solutions.
* Prefer extending existing features over creating parallel implementations.
* Generate production-ready code only.
* Avoid unnecessary abstractions and premature optimizations.
* Keep implementations simple, maintainable, and predictable.
* Always consider the business rules before implementing technical solutions.
* Update tests when behavior changes.
* Update documentation when architecture or workflows change.

## Business Domain

### Core Entities

* Barbershop
* Barber
* Customer
* Service
* Appointment
* Availability

## Palet colors

Primary:
#F59E0B

Primary Hover:
#D97706

Primary Light:
#FBBF24

Background:
#0A0A0A

Surface:
#111827

Surface Hover:
#1F2937

Text Primary:
#FFFFFF

Text Secondary:
#D1D5DB

Text Muted:
#9CA3AF

Border:
#374151

Success:
#10B981

Error:
#EF4444

### Core Business Rules

* Appointments must always be linked to a valid customer.
* Appointments must always be linked to a valid barber.
* Appointments must always reference a valid service.
* A barber cannot have overlapping appointments.
* Appointments cannot be scheduled in the past.
* Appointments must respect barber availability.
* Inactive services cannot be booked.
* Service duration must be greater than zero.
* Service prices cannot be negative.
* Cancelled appointments must free the corresponding time slot.

## Technology Stack

* TypeScript (Strict Mode)
* React 19
* Vite
* TailwindCSS v4
* heroUI
* React Router v7
* TanStack Query v5
* React Hook Form
* Zod
* Axios
* Vitest
* React Testing Library

## Architecture

### Atomic Design

Follow the Atomic Design methodology.

* atoms: Small reusable UI elements.
* molecules: Compositions of atoms.
* organisms: Complex UI sections.
* templates: Layout structures.
* pages: Final page composition.

### Layer Responsibilities

#### Components

* Responsible only for rendering UI.
* Must not contain business rules.
* Must not perform API requests.

#### Hooks

* Responsible for state management.
* Responsible for React Query integration.
* Must not render UI.

#### Services

* Responsible for API communication.
* Must not contain UI logic.

#### Schemas

* Responsible for Zod validation.
* Centralize validation rules.

#### Types

* Responsible for shared interfaces and contracts.

## Coding Standards

* Use TypeScript strict mode.
* Use functional components only.
* Use named exports for shared code.
* Use default exports only for pages.
* Prefer composition over inheritance.
* Keep components focused on a single responsibility.
* Avoid prop drilling when possible.
* Prefer `const` over `let`.
* Always use optional chaining (`?.`) and nullish coalescing (`??`) when appropriate.
* Always use strict equality (`===` and `!==`).

### Naming Conventions

#### Files

* Use kebab-case.

Examples:

* service-card.tsx
* create-appointment-form.tsx

#### Hooks

* Must start with `use`.

Examples:

* use-services.ts
* use-create-appointment.ts

#### Schemas

* Must end with `-schema`.

Examples:

* appointment-form-schema.ts
* service-schema.ts

#### Constants

* Use uppercase with underscores.

Examples:

* APPOINTMENT_STATUS
* DEFAULT_PAGE_SIZE

## State Management

* Local state: useState, useReducer.
* Server state: TanStack Query.
* Form state: React Hook Form.
* URL state: React Router.

Do not introduce additional state management libraries without explicit approval.

## API Rules

* All requests must use the centralized Axios instance.
* Never call Axios directly from components.
* Never access environment variables outside the configuration layer.
* Keep API communication inside the services layer.

## Validation Rules

* All forms must use React Hook Form.
* All user input must be validated with Zod.
* New entities must include TypeScript types and validation schemas.
* UI validation never replaces backend validation.

## Testing

* Write unit tests for utilities, schemas, and complex hooks.
* Write integration tests for forms and user flows.
* Test loading, success, and error states.
* Keep tests deterministic and isolated.

## Definition of Done

A task is complete only when:

* The feature works correctly.
* Business rules are respected.
* TypeScript types are implemented.
* Zod validation is implemented.
* Tests are updated and passing.
* Linting passes.
* Build passes.
* Acceptance criteria are satisfied.
