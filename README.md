# Company List - Next.js Application

A modern company directory built with Next.js 14, TypeScript, and shadcn/ui components. Browse companies founded by alumni with filtering capabilities.

## Features

- 📋 **Company Directory**: View detailed information about companies including name, website, description, and founders
- 🔍 **Filter by Class**: Filter companies based on founder graduation class
- 🎨 **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Fast Performance**: Built on Next.js 14 with App Router

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd /path/to/list
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
list/
├── app/
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Main page with company list
│   └── globals.css      # Global styles
├── components/
│   └── ui/
│       ├── card.tsx     # Card component
│       └── select.tsx   # Select dropdown component
├── lib/
│   └── utils.ts         # Utility functions
├── .github/
│   └── copilot-instructions.md
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── next.config.js       # Next.js configuration
└── package.json         # Project dependencies
```

## Usage

### Filtering Companies

Use the dropdown filter at the top of the page to filter companies by founder graduation class:
- Select "All Classes" to view all companies
- Select a specific class (e.g., "Class of Spring 2013") to view only companies with founders from that class

### Company Cards

Each company card displays:
- Company logo (placeholder)
- Company name and website
- Description of the company
- Founder information including names, profile pictures (placeholders), and graduation classes

## Customization

### Adding More Companies

Edit the `companies` array in `app/page.tsx` to add more companies:

```typescript
const companies: Company[] = [
  {
    id: 6,
    name: "Your Company",
    website: "yourcompany.com",
    description: "Company description...",
    logoUrl: "https://via.placeholder.com/300x200/color/ffffff?text=YourLogo",
    founders: [
      {
        name: "Founder Name",
        class: "Class of Fall 2020",
        imageUrl: "https://via.placeholder.com/80/cccccc/666666?text=FN"
      }
    ]
  },
  // ... more companies
]
```

### Replacing Placeholder Images

Replace the placeholder URLs in the company data with actual image URLs for your logos and founder photos.

## Building for Production

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Contributing

This project follows the development guidelines specified in `.github/copilot-instructions.md`.

## License

This project is for educational and portfolio purposes.
