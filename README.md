# Lumen - AI-Powered Alignment & Wellness Platform

A comprehensive product analysis presentation for Lumen, an AI-Powered Alignment & Wellness Platform. This presentation includes competitor analysis, market research, positioning strategy, and trend forecasting.

## Features

- 🎨 **Modern Bento Grid Layout** - Beautiful, responsive card-based design
- 🌙 **Dark Theme** - Sleek black theme with colorful gradient cards
- 📊 **Interactive Popups** - Detailed information on clickable cards
- 📱 **Responsive Design** - Works seamlessly on all devices
- 📄 **PDF Export** - Download comprehensive research reports
- 🚀 **Auto-Deployment** - Automatic deployment to GitHub Pages on every push

## Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** - Modern utility-first CSS
- **Lucide React** - Beautiful icon library
- **jsPDF** - PDF generation
- **GitHub Actions** - CI/CD automation

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project uses **GitHub Actions** for automatic deployment. Every push to the `main` branch will:

1. ✅ Build the project
2. ✅ Deploy to GitHub Pages automatically

### Manual Deployment

If you need to deploy manually:

```bash
npm run deploy
```

## GitHub Pages Configuration

The site is automatically deployed to: **https://dannick-aelf.github.io/lumen-presentation/**

### Setting up GitHub Pages with Actions

1. Go to your repository settings
2. Navigate to **Pages** section
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. The workflow will automatically deploy on every push to `main`

## Project Structure

```
├── .github/workflows/    # GitHub Actions workflows
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Custom styles and animations
│   └── index.css        # Tailwind imports
├── public/              # Static assets
└── dist/                # Build output (auto-generated)
```

## Workflow

The `.github/workflows/deploy.yml` workflow:
- Triggers on push to `main` branch
- Builds the project using `npm run build`
- Deploys to GitHub Pages automatically
- No manual intervention required!

## License

Private project - All rights reserved
