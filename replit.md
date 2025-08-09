# Overview

This is a premium single-page social media showcase for TEDx Youth STEM Red Sea, optimized for Vercel deployment. The application features a stunning animated frontend with glass morphism design, custom TEDx branding, and seamless social media integration. Built as a modern portfolio site showcasing TEDx Youth STEM Red Sea's online presence with clean design and professional presentation.

## Recent Changes (August 2025)
- Converted to single-page showcase with simplified architecture
- Implemented custom CSS patterns for artistic background (red geometric shapes)
- Integrated user-provided TEDx logos and branding assets
- Enhanced social media buttons with larger sizes and improved UX
- Prepared for Vercel deployment with optimized build configuration
- Removed Replit-specific scripts for clean production deployment
- Added creator attribution link in footer

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom design system including TEDx branding colors and glass morphism effects
- **UI Components**: Shadcn/ui component library providing consistent, accessible UI elements
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions throughout the interface
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript for type-safe server-side development
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Storage Pattern**: Repository pattern with both in-memory and database implementations
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Development**: Hot reload with Vite middleware integration for seamless development experience

## Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Database Provider**: Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage class for testing and development
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage

## Authentication and Authorization
- **Session-based Authentication**: Express sessions with PostgreSQL storage
- **User Schema**: Simple username/password model with UUID primary keys
- **Password Security**: Prepared for secure password hashing implementation
- **Authorization Pattern**: Middleware-based request authentication and authorization

## External Dependencies
- **Database**: Neon Database serverless PostgreSQL for production data storage
- **Fonts**: Google Fonts (Inter font family) for consistent typography
- **Icons**: Font Awesome and Lucide React for comprehensive icon coverage
- **External Images**: Unsplash for high-quality background imagery
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Date Utilities**: date-fns for date manipulation and formatting
- **Development Tools**: Replit integration for development environment and runtime error handling

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns, type safety throughout the stack, and a scalable database design ready for production deployment.