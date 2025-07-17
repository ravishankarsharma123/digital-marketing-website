# Digital Marketing Agency Website

A modern, responsive digital marketing agency website built with Next.js 14, featuring beautiful animations, dark/light mode support, and a comprehensive service showcase.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient effects and animations
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Interactive Components**: Animated cards, modals, and hover effects
- **Service Showcase**: Detailed service pages with pricing and features
- **Contact System**: Multiple contact forms with validation
- **SEO Optimized**: Built with Next.js for optimal performance and SEO
- **Component Library**: Built with shadcn/ui and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Fonts**: Geist (optimized with next/font)

## 📦 Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd cohort/webpage
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── ourservices/       # Services page
│   ├── navbar.jsx         # Navigation component
│   ├── page.jsx           # Homepage
│   └── layout.jsx         # Root layout
├── components/
│   ├── ui/                # shadcn/ui components
│   │   ├── animated-card.jsx
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── contact-form.jsx
│   │   ├── dialog.jsx
│   │   └── ...
│   └── theme-provider.jsx # Theme context
└── lib/
    └── utils.js           # Utility functions
```

## 🎨 Design Features

### Pages
- **Homepage**: Hero section, services overview, testimonials, team showcase
- **About**: Company story, team members, achievements, values
- **Services**: Detailed service descriptions with pricing and features
- **Contact**: Multiple contact forms with business information

### Components
- **Animated Cards**: Reusable cards with hover effects and gradients
- **Contact Forms**: Flexible form component with multiple presets
- **Navigation**: Responsive navbar with mobile menu
- **Theme Toggle**: Smooth dark/light mode switching

## 🎯 Key Components

### AnimatedCard
```jsx
<AnimatedCard 
  title="Service Title"
  description="Service description"
  icon={<Icon />}
  gradient="from-blue-500 to-purple-600"
  onShowDetails={handleDetails}
/>
```

### ContactForm
```jsx
<ContactForm 
  title="Get In Touch"
  compact={false}
  fields={{
    firstName: true,
    email: true,
    message: true
  }}
/>
```

## 🌈 Theme Support

The project includes comprehensive dark/light mode support:
- Automatic system theme detection
- Manual theme switching
- Smooth transitions between themes
- Consistent styling across all components

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Tablet Optimized**: Proper layouts for tablet screens
- **Desktop Enhanced**: Rich desktop experience with hover effects
- **Touch Friendly**: Large touch targets for mobile interaction

## 🎨 Customization

### Colors
Modify theme colors in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: "your-primary-color",
      secondary: "your-secondary-color"
    }
  }
}
```

### Fonts
Update fonts in `app/layout.jsx`:
```jsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed on any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean

## 🔧 Environment Variables

Create a `.env.local` file for environment variables:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📈 Performance

- **Core Web Vitals**: Optimized for excellent performance scores
- **Image Optimization**: Automatic image optimization with Next.js
- **Code Splitting**: Automatic code splitting for faster page loads
- **SEO Ready**: Built-in SEO optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📞 Support

For support, email support@yourdigitalagency.com or join our Slack channel.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [shadcn/ui](https://ui.shadcn.com/) - For UI components
- [Lucide](https://lucide.dev/) - For beautiful icons

---

Built with ❤️ by [Your Digital Agency Team]



