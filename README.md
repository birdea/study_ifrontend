# study_ifrontend

A frontend experimental study workspace, showcasing modern React development along with AI-assisted GUI component generation using the Figma Model Context Protocol (MCP).

## 🚀 Overview

This project serves as a testing ground for frontend technologies and AI Agent integrations. It includes multiple sample pages (`figma.page.1` through `figma.page.4`), which were implemented using advanced context extraction from the Figma MCP Server, translated directly into React & Vanilla CSS/SCSS by the Antigravity Agent.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Webpack 5](https://webpack.js.org/)
- **State Management**: [Jotai](https://jotai.org/)
- **Styling**: SCSS / Vanilla CSS (Tailwind CSS removed in favor of project-specific styling system)

## ✨ Key Features

- **Figma MCP Integration Guide**: Includes an optimized skill directive (`docs/figma-mcp-gui-generation/SKILL.md`) for ensuring precise GUI layout translations without context window limitations or token pollution.
- **Dynamic Curation Page Examples**: Interactive, AI-generated components mirroring complex Figma screens (e.g., News Curation layouts, Interactive tabs, SVG Assets).
- **Lightweight State Management**: Utilizes Jotai to seamlessly handle sidebar folding state and active page rendering without standard heavy routing libraries.

## 📦 Project Structure

```text
/src
  ├── assets
  ├── components
  │   ├── Header.tsx           # Global Header
  │   ├── Sidebar.tsx          # Navigation sidebar
  │   ├── Content.tsx          # Main content router mapper
  │   └── figma-page-*         # AI-generated GUI pages
  ├── styles                   # Global styling / SCSS
  ├── store.ts                 # Jotai atom definitions
  ├── index.ts                 # Entry point
  └── main.tsx                 # React Root
```

## 💻 Getting Started

### Prerequisites

- Node.js (v20.x recommended)
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server (Webpack Dev Server):
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Code Linting:
   ```bash
   npm run lint
   ```

## 📝 Guidelines for Figma MCP Generation

The `docs/figma-mcp-gui-generation/SKILL.md` contains strict rules on how AI agents should interact with Figma data. Developers and agents generating new components should:
1. Fetch screenshot data first for visual context.
2. Analyze structure complexity and metadata before requesting detailed design properties.
3. Automatically convert absolute constraints (px) to responsive dimensions (rem/flex).
4. Strictly filter out Figma-specific metadata (`data-node-id`, mock endpoints) from final React output.
