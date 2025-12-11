# Agents Guide - SG Cloud

This document provides guidance for AI coding agents working on the SG Cloud (Software Generation) project.

## Project Overview

SG Cloud is a business portfolio application built with React, showcasing the work of Carlos Gumucio and Benjamin Sepulveda. It's based on a modern React PWA template using Vite, TypeScript, and Material-UI.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI) v6
- **Routing**: React Router v7
- **State Management**: Jotai
- **PWA**: vite-plugin-pwa

## Architecture & Patterns

### Project Structure

```
src/
├── components/     # Reusable UI components
├── config/         # Application configuration
├── error-handling/ # Error management
├── hooks/          # Custom React hooks
├── pages/          # Application pages/routes
├── routes/         # Routing configuration
├── sections/       # Self-contained application sections
├── theme/          # Theme configuration
└── utils/          # Utility functions
```

### Component Organization

Each component follows this structure:
```
ComponentName/
├── index.ts          # Default exports the component
├── ComponentName.tsx # Pure component implementation
├── types.ts          # Component-related types (optional)
├── styled.ts         # Styled components (optional)
└── utils.ts          # Component-specific utilities (optional)
```

**Important**: When creating or modifying components:
- Keep component logic in `ComponentName.tsx`
- Export through `index.ts` for clean imports
- Use TypeScript for all files
- Follow existing naming conventions

### Styling

This project uses MUI's styling system:
- **styled components**: For component-specific styles in `styled.ts`
- **sx prop**: For inline styles when appropriate
- **Theme**: Use theme tokens from `src/theme/` for consistency

**Color Palette (SG Cloud Brand)**:
- Primary: `#0A2540` (deep navy blue)
- Secondary: `#4E8FF7` (bright blue)
- Background: `#FFFFFF` (white - light mode)
- Accents: `#A9B4C2`, `#E8ECF2`

### Routing

Pages are defined in `src/routes/index.ts`:
- Each route maps to a page component in `src/pages/`
- Uses lazy loading with `asyncComponentLoader`
- Include icon and title for navigation
- Current routes: Home, Projects, About Us, Contact

### State Management

- **Local state**: Use React's `useState` for component-level state
- **Global state**: Use Jotai atoms for cross-component state
- **Theme state**: Managed through custom hooks in `src/theme/`

## Best Practices

### Code Quality

1. **TypeScript**: Always use TypeScript with proper type definitions
2. **Linting**: Run `npm run lint:check` before committing
3. **Type Checking**: Run `npm run ts:check` to verify types
4. **Formatting**: Code is auto-formatted with Prettier

### Testing

- **Unit Tests**: Use Vitest (`npm run test:unit`)
- **E2E Tests**: Use Playwright (`npm run test:e2e`)
- Write tests for new features and bug fixes

### Building & Deployment

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`

The build output goes to the `dist/` folder (ignored by git).

### PWA Features

- Service worker is auto-generated
- Offline support enabled
- Manifest configured in `manifest.json`
- Icons and theme colors follow SG Cloud branding

## Common Tasks

### Adding a New Page

1. Create folder in `src/pages/` with component name
2. Create `ComponentName.tsx` and `index.ts`
3. Add route in `src/routes/index.ts`
4. Import appropriate icon from `@mui/icons-material`

### Modifying Theme

- Edit `src/theme/themes.ts` for color changes
- Maintain both light and dark mode variants
- Use SG Cloud brand colors as base

### Adding Dependencies

- Check for security vulnerabilities before adding
- Prefer existing MUI components over new libraries
- Keep bundle size minimal

## Git Workflow

- The `dist/` folder is gitignored
- Use conventional commits when possible
- Run quality checks before committing
- Husky pre-commit hooks will format code

## Configuration Files

- `package.json`: Project metadata and scripts
- `vite.config.ts`: Vite configuration
- `tsconfig.json`: TypeScript configuration
- `eslint.config.js`: ESLint rules
- `.prettierrc.json`: Prettier formatting rules

## Environment Variables

- Prefix with `VITE_` to expose to client
- Store in `.env` file (gitignored)
- Template in `env/.shared`

## Helpful Links

- [MUI Documentation](https://mui.com/)
- [React Router](https://reactrouter.com/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Jotai Docs](https://jotai.org/)

---

**Remember**: This is a business portfolio for SG Cloud (Software Generation), founded by Carlos Gumucio and Benjamin Sepulveda. Keep the professional branding and color scheme consistent throughout the application.
