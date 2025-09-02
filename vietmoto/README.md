# Ho Chi Minh Trail Motorcycle Adventure

An interactive travel journal documenting a 10-day motorcycle journey along the Ho Chi Minh Trail in Vietnam. Built with Next.js, React, and Tailwind CSS.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Type Safety**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vietmoto.git
   cd vietmoto
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # App router
│   ├── components/         # Reusable components
│   ├── contexts/           # Global state and context providers
│   └── data/               # Static data and content
├── public/                 # Static files
└── styles/                 # Global styles
```

## Customization

- Update trip data in `src/data/carousel-data.json`
- Modify styles in the respective component files using Tailwind CSS
- Add new components in the `components` directory

## Dependencies

- `next`: ^14.0.0
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `tailwindcss`: ^3.3.0
- `typescript`: ^5.0.0
- `lucide-react`: ^0.294.0

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Photo by Irwin](https://www.flickr.com/photos/irwn/)
