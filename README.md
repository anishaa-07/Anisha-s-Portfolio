<div align="center">

# ✨ Anisha's Portfolio

### A modern, animated personal portfolio built to actually show how I build things — not just talk about it.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

**[🔗 Live Demo](#)** &nbsp;•&nbsp; **[📄 Resume](#)** &nbsp;•&nbsp; **[💬 Contact](#contact)**

</div>

<br>

<div align="center">
  <img src="./public/screenshot-hero.png" alt="Portfolio Hero Section" width="85%">
</div>

<br>

## 👋 About This Project

I'm a B.Tech student learning backend and full-stack development — currently deep in the MERN stack (Node.js, Express, MongoDB, React). This portfolio isn't just a template with my name swapped in; it's built to honestly reflect where I actually am: a student who ships real projects, not a "10-year senior engineer" pretending otherwise.

No inflated buzzwords. Just what I've built, how I built it, and what I'm building next.

<br>

## 🎯 Features

| Feature | Details |
|---|---|
| 🖱️ **Cursor-reactive hero** | CSS mask-based spotlight effect that follows your cursor — zero canvas overhead, near-zero performance cost |
| ⌨️ **Typewriter tagline** | Staggered Framer Motion animation cycling through my roles |
| 📜 **Scroll-reveal sections** | Cards and content fade/slide in as you scroll, staggered for a natural rhythm |
| 🎴 **Interactive project cards** | Hover-lift with shadow + scale, live status badges (e.g. "In Progress" for Huddle) |
| 🌗 **Dark/light mode** | Dark by default, smooth icon-morph toggle |
| 📱 **Fully responsive** | Mobile-first, tested at 375px / 768px / 1024px breakpoints |
| ⚡ **Performance-first animations** | Every animation is capped and tested — nothing over 600ms, no blocked scrolling |

<br>

## 🛠️ Tech Stack

<div align="center">

| Layer | Tech |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React, React Icons |
| Fonts | Space Grotesk (headings) · Inter (body) |
| Accent | Electric Lime `#84cc16` |

</div>

<br>

## 🚀 Featured Project — Huddle

> A mini GitHub + Notion + Discord hybrid — a team collaboration workspace I'm actively building from scratch.

- **Auth:** JWT-based authentication
- **Real-time chat:** Socket.io, per-project channels
- **Task tracking:** Kanban-style boards
- **File uploads:** Cloudinary integration
- **Data layer:** MongoDB + Mongoose (Users, Teams, Projects, Tasks, Messages, FileAttachments)
- **Frontend:** React + Tailwind CSS

🔗 [View Huddle repo →](#)

<br>

## 📂 Folder Structure

```
src/
├── assets/          # Images, SVGs
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Hero, About, Projects, Skills, Contact
│   └── ui/          # Buttons, Cards, Badges, ThemeToggle
├── data/            # Project & skills data
├── hooks/           # useTheme, useScroll, etc.
├── styles/          # Global Tailwind styles
├── App.jsx
└── main.jsx
```

<br>

## 💻 Run It Locally

```bash
git clone https://github.com/anishaa-07/portfolio.git
cd portfolio
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

<br>

## 📬 Contact

- **GitHub:** [@anishaa-07](https://github.com/anishaa-07)
- **LinkedIn:** [Add your link]
- **Email:** [anisharanjanaur2007@gmail.com]

<br>

<div align="center">

*Built section by section, animation by animation — still learning, still shipping.* 🌱

</div>
