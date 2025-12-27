# Mohamed Ayman - Professional Portfolio

A high-end, data-centric portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Multi-Page Navigation**: Home, Experience, Projects, and Skills pages
- **Persistent Navigation Line**: Visual timeline that tracks user journey across pages
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Dark Mode Theme**: Midnight Blue/Slate with Cyber Lime and Data Blue accents
- **Responsive Design**: Fully responsive across all device sizes
- **Data Visualizations**: Interactive stats and metrics display

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── page.tsx          # Home page
│   ├── experience/       # Experience page
│   ├── projects/         # Projects page
│   ├── skills/           # Skills page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Site header
│   ├── NavigationLine.tsx # Persistent navigation timeline
│   └── PageTransition.tsx # Page transition wrapper
└── data.ts               # All portfolio data
```

## Customization

All portfolio content is stored in `data.ts`. Update the following to customize:

- `experiences`: Career history and achievements
- `projects`: Featured project case studies
- `skills`: Technical skills and certifications
- `stats`: Key statistics displayed on home page
- `socialLinks`: LinkedIn, Upwork, and email links

## Color Scheme

- **Midnight Blue**: `#0a1929` - Primary background
- **Slate Dark**: `#1e293b` - Secondary background
- **Cyber Lime**: `#00ff88` - Accent color
- **Data Blue**: `#3b82f6` - Secondary accent

## License

This project is private and proprietary.

