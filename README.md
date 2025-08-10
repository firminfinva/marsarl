# MarsARL25 - Next.js Version

This is the Next.js version of your MarsARL25 project, converted from the original React/Vite setup while maintaining the exact same design and functionality.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
nextjs-version/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Root layout with providers
│   │   ├── page.tsx        # Homepage
│   │   ├── admin/          # Admin portal route
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── ui/            # Shadcn/ui components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Services.tsx   # Services section
│   │   ├── PastWork.tsx   # Past work section
│   │   ├── Partners.tsx   # Partners section
│   │   ├── Footer.tsx     # Footer
│   │   └── Admin/         # Admin components
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom hooks
│   └── lib/               # Utility functions
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## 🎨 Features

- **Same Design**: Identical visual appearance to the original
- **Next.js Benefits**: Better SEO, server-side rendering, improved performance
- **Responsive Design**: Works on all devices
- **Admin Portal**: Available at `/admin` route
- **Smooth Navigation**: All original navigation features preserved

## 🔧 Key Changes from Vite to Next.js

1. **File-based Routing**: Routes are now based on file structure in `src/app/`
2. **Server Components**: Default to server components for better performance
3. **Client Components**: Use `"use client"` directive for interactive components
4. **Image Optimization**: Use Next.js `Image` component for better performance
5. **Built-in API Routes**: Can add API routes in `src/app/api/`

## 🚀 Next Steps

1. **Customize**: Modify components in `src/components/`
2. **Add Pages**: Create new routes by adding files in `src/app/`
3. **API Routes**: Add backend functionality in `src/app/api/`
4. **Deploy**: Deploy to Vercel, Netlify, or your preferred platform

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 URLs

- **Homepage**: http://localhost:3000
- **Admin Portal**: http://localhost:3000/admin

Your Next.js project is now ready to use with all the same features as your original React/Vite project!
