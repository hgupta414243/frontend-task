# ✨ Frontend Developer Assignment: Without Simbian vs With Simbian

## 🧠 Objective
Create a visually engaging and interactive webpage using Next.js + Tailwind CSS + an animation library of choice (Framer Motion, GSAP, React Spring, etc.). The page contrasts the "Without Simbian" vs "With Simbian" security operations experience, showcasing the dramatic difference in performance, outcomes, and visual storytelling. It must be responsive across multiple devices eg: Desktop, Mobile, Tablet etc

# Note: You must match exact functionality and animation as displayed in video

## Check video reference for more details

Video Link [https://github.com/user-attachments/assets/754c12a8-e262-4bbf-95ea-9df64b28dad3]
If above link not working try this

Video link [https://drive.google.com/drive/folders/1yeklCMBqYDDoCgnyqcqqwQhpyV5uBi3L?usp=drive_link]

## 📄 What to Build

### 🔴 Section 1 – Without Simbian
Design 3 cards:
- **Ignored Alerts**
- **Wrongly Closed Alerts**
- **Active Threats**

Each card shows:
- Count (starting with: Ignored Alerts = 200, Wrongly Closed = 35, Active Threats = 5)
- Related icon (SVG icons)
- Real-time dummy alerts (e.g., "Phishing Email", "Suspicious Login") that drop with animation every few seconds

Animations include:
- The count increasing
- The alert card receiving a new alert (shake, glow, slide, bounce)

Sample content lines:
- Wasting valuable analyst time on false positives
- Processing one alert at a time, missing the big picture
- More time fixing SOAR automation, less time on real threats

### 🟢 Section 2 – With Simbian
Display a step-by-step horizontal animation/flow that includes:
- **Triaged & Reported** – SOC Agent handled investigation and reporting
- **Automated Response** – Incident automatically contained
- **Comprehensive Analysis** – AI recognized patterns
- **Accurate Detection** – Zero false positives
- **24/7 Coverage** – No analyst fatigue

Use side arrows or connecting lines to show progression.

At the end, show 3 cards similar to the previous section, but with:
- Ignored Alerts: 0
- Wrongly Closed: 0
- Active Threats: 0

Animate these counts to stay 0 (fade-in gently, checkmark animation, etc.)

Sample summaries:
- 90% of alerts resolved automatically, 24/7
- Correlates alerts to your environment
- Investigate every alert—no SOAR needed

## ✅ Requirements

- Use Next.js with the App Router (Next.js 13+ or 14)
- Style with Tailwind CSS
- Use any animation library (Framer Motion preferred, but open)
- Keep the UI visually appealing and responsive
- Code must be:
  - Well-structured (clear folder/component organization)
  - Reusable (split into components)
  - Scalable (can be extended easily)
  - Responsive (mobile + tablet + desktop)
- Add dummy alert data (randomized or cycled examples)
- Include comments and good naming conventions

## ❌ Restrictions

- Don't use UI kits like MUI, Bootstrap, or Chakra (Tailwind only)
- Don't hardcode everything in one component/page
- Don't use non-responsive layouts
- Don't use actual backend services – keep it client-side only

## 🧪 Evaluation Criteria

| Criteria | Description |
|----------|-------------|
| ✅ UI/UX | Is the experience clean, polished, and intuitive across screen sizes? |
| ✅ Code Quality | Is the code well-structured, reusable, and scalable? |
| ✅ Animation | Are animations smooth, purposeful, and performant? |
| ✅ Attention to Detail | Did you capture both storylines effectively and clearly? |
| ✅ Creativity | Is there any extra polish or innovation in your storytelling or flow? |

## ⏰ Time Expectation
This is expected to be a 24 to 36-hour task for most experienced developers. If it takes more, prioritize quality in the most impactful areas.

## 📦 Submission
- Share a GitHub repo link with deployment on Vercel or another platform
- Include a short README (1-2 paragraphs) describing:
  - Your thought process
  - Animation library used
  - Any known issues or improvements you would make with more time
