# Bamboo Stack

A modern full-stack TypeScript starter template built with TanStack Start, featuring type-safe API development, authentication, and modern tooling.

## Branches

This repository contains two different implementations:

- **[`orpc` branch](https://github.com/devpanda0/bamboo-stack/tree/orpc)** - oRPC implementation
- **[`trpc` branch](https://github.com/devpanda0/bamboo-stack/tree/trpc)** - tRPC implementation

> Switch between branches to explore different approaches to type-safe API development in a full-stack React application.

## Features

- ⚡ **TanStack Start** - Full-stack React framework
- 🗄️ **Prisma ORM** - Next-generation ORM with PostgreSQL
- 🔐 **Better Auth** - Modern authentication solution
- 🎨 **TailwindCSS v4** - Latest utility-first CSS framework
- 📝 **TypeScript** - Full type safety throughout
- 🧹 **Biome** - Fast formatter and linter

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- PostgreSQL database

### Installation

```bash
# Install dependencies
npm install

# Set up your environment variables
cp .env.example .env

# Generate Prisma client and push schema
npm run db:push
npm run db:generate

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file with:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/bamboo"
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push schema changes to database
- `npm run db:generate` - Generate Prisma client
- `npm run db:studio` - Open Prisma Studio
- `npm run lint` - Lint code with Biome
- `npm run format` - Format code with Biome
- `npm run typecheck` - Run TypeScript checks

## Docker

Build and run with Docker:

```bash
# Build image
docker build -t bamboo-stack .

# Run container
docker run -p 3000:3000 bamboo-stack
```

## Project Structure

```
src/
├── components/          # React components
├── lib/                # Utilities and configurations
├── routes/             # TanStack Start routes
└── styles/             # Global styles
```

## Tech Stack

- **Frontend**: React 19, TanStack Router, TailwindCSS v4
- **Backend**: TanStack Start, Prisma
- **Database**: PostgreSQL
- **Auth**: Better Auth
- **Validation**: ArkType
- **Tooling**: TypeScript, Biome, Vite

## License

MIT License - see LICENSE file for details.