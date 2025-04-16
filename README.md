# Simbian Security Operations Demo

This project is a responsive, visually engaging webpage built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It contrasts the security operations experience **Without Simbian** (manual, error-prone processes) versus **With Simbian** (automated, efficient, and accurate). The application showcases real-time alert animations, a step-by-step flow, and responsive design for desktop, tablet, and mobile devices.

## Features

### Without Simbian

- **Three Animated Cards**:
  - Ignored Alerts (starting at 200)
  - Wrongly Closed Alerts (starting at 35)
  - Active Threats (starting at 5)
- Each card includes:
  - Real-time count increments with animation.
  - SVG icons for visual representation.
  - Dummy alerts (e.g., "Phishing Email", "Suspicious Login") that drop in with shake and slide animations every few seconds.
- Descriptive text highlighting inefficiencies (e.g., "Wasting valuable analyst time on false positives").

### With Simbian

- **Horizontal Step-by-Step Flow**:
  - Five steps: Triaged & Reported, Automated Response, Comprehensive Analysis, Accurate Detection, and 24/7 Coverage.
  - Animated progression with connecting lines and smooth transitions using Framer Motion.
  - Each step card slides in with staggered animations for title and description.
- **Three Result Cards**:
  - Ignored Alerts: 0
  - Wrongly Closed: 0
  - Active Threats: 0
  - Animated checkmarks and fade-in effects to emphasize zero issues.
- Summary text showcasing benefits (e.g., "90% of alerts resolved automatically, 24/7").

### Technical Highlights

- Built with **Next.js 14** (App Router) for server-side rendering and optimal performance.
- **TypeScript** for type-safe development.
- **Tailwind CSS** for responsive, utility-first styling without external UI kits.
- **Framer Motion** for smooth, performant animations (e.g., slide, scale, rotate, and fade effects).
- Client-side only, with randomized dummy alert data.
- Well-structured, reusable components (`AlertCard`, `WithoutSimbian`, `WithSimbian`).
- Responsive design tested across mobile, tablet, and desktop.

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

## Installation

1.  **Clone the repository**:

    ```
    git clone <repository-url>
    cd simbian-demo

    ```

2.  **Install dependencies**:

    ```
    npm install

    ```

3.  **Run the development server**:

    ```
    npm run dev

    ```

    Open [http://localhost:3000](http://localhost:3000/) in your browser to view the application.

4.  **Build for production**:

    ```
    npm run build
    npm run start

    ```

## Project Structure

```
simbian-demo/
├── app/
│   ├── globals.css          # Tailwind CSS global styles
│   └── page.tsx            # Main page component
├── components/
│   ├── AlertCard.tsx       # Reusable alert card component
│   ├── OverlapIcons.tsx    # Reusable Icon Cards component
│   ├── WithoutSimbian.tsx  # Without Simbian section
│   └── WithSimbian.tsx     # With Simbian section
├── public/                 # Static assets (if any)
├── package.json            # Project dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation

```

## Dependencies

- **Next.js**: Framework for React with App Router.
- **TypeScript**: Static typing for JavaScript.
- **Tailwind CSS**: Utility-first CSS framework.
- **Framer Motion**: Animation library for React.
- **React**: Core library for building UI.
- **ESLint**: Linting for code quality.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production application.
- `npm run start`: Runs the production build.
- `npm run lint`: Runs ESLint for code quality checks.

## Evaluation Criteria Met

- **UI/UX**: Clean, intuitive, and responsive across all screen sizes.
- **Code Quality**: Well-structured, reusable components with clear TypeScript interfaces.
- **Animation**: Smooth, purposeful animations using Framer Motion (e.g., staggered entrances, checkmark rotations).
- **Attention to Detail**: Captures both storylines effectively with clear visual contrast.
- **Creativity**: Progressive step reveal and dynamic alert animations add polish to the storytelling.

## Restrictions Followed

- No UI kits (e.g., MUI, Bootstrap) used; only Tailwind CSS.
- Components are modular, not hardcoded in a single file.
- Fully responsive layout.
- No backend services; all data is client-side and randomized.

## Future Improvements

- Add interactive controls to pause/resume step animations.
- Integrate a theme toggle (light/dark mode).
- Expand dummy alert variety with more detailed mock data.

## License

This project is for demonstration purposes and not licensed for production use.
