# rks304-web-fundamental
Collection of web development practicum projects.

# Raisya Tri Hapsari — Portfolio Website

A personal portfolio website built with **pure HTML & CSS** (no framework), showcasing my background, skills, and projects as a Cyber Security student.

## Pages

| File            | Description                                                        |
| --------------- | ------------------------------------------------------------------- |
| `index.html`    | Home — intro/hero, about me, skills, and a contact block            |
| `portfolio.html`| Portfolio — list of projects with tech stack and repository links   |

Both pages share the same contact section at the bottom (email + social links) instead of a separate contact page — clicking **Contact** in the nav just scrolls to it.

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties (variables), Flexbox, Grid, CSS counters — no Bootstrap/Tailwind
- **Vanilla JavaScript** — small script for the "copy email" button
- **Fonts** — [IBM Plex Sans & IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Sans) via Google Fonts

## Features

- Fully responsive layout
- Accessible focus states (`:focus-visible`) and `prefers-reduced-motion` support
- Auto-numbered project cards using CSS counters
- One-click "Copy email" button with visual feedback
- Sticky navigation header with smooth-scroll anchor links

## Project Structure

```
.
├── index.html          # Home page
├── portfolio.html       # Portfolio page
├── style.css             # All styling
└── assets/
    └── profile.png       # Profile photo used on the home page
```

## Getting Started

No build tools or dependencies required.

1. Clone the repository
   ```bash
   git clone https://github.com/mikorin01/<repo-name>.git
   ```
2. Open `index.html` in your browser, or serve it locally (e.g. with the VS Code **Live Server** extension) for the best experience.

## Author

**Raisya Tri Hapsari**
Cyber Security Student, Politeknik Negeri Batam

- 📧 Email: [raisyatrihapsari@email.com](mailto:raisyatrihapsari@email.com)
- 💼 LinkedIn: [raisya-tri-hapsari](https://www.linkedin.com/in/raisya-tri-hapsari/)
- 💻 GitHub: [@mikorin01](https://github.com/mikorin01)

## License

This project is open for reference and learning purposes. Feel free to fork it, but please don't reuse the personal content (name, photo, projects) as your own.