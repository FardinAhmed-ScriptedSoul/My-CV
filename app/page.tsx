import type { ReactNode } from 'react';
import styles from './page.module.css';

const currentWork = [
  'Exploring Next.js and modern web application architecture.',
  'Developing impactful digital experiences with clean, scalable frontend and backend systems.',
  'Learning machine learning and data-driven intelligence for practical applications.',
  'Building data mining and analytics projects focused on insight extraction and pattern discovery.',
  'Exploring networking technologies, distributed systems, and resilient communication models.',
  'Improving my UI/UX design and frontend engineering skills to create better user experiences.',
];

type SkillKind =
  | 'html'
  | 'css'
  | 'js'
  | 'react'
  | 'next'
  | 'ts'
  | 'go'
  | 'node'
  | 'express'
  | 'mongodb'
  | 'postgres'
  | 'git';

type SkillItem = {
  name: string;
  kind: SkillKind;
};

const skillGroups = [
  {
    title: 'Frontend Development',
    items: [
      { name: 'HTML5', kind: 'html' },
      { name: 'CSS3', kind: 'css' },
      { name: 'JavaScript', kind: 'js' },
      { name: 'React', kind: 'react' },
      { name: 'Next.js', kind: 'next' },
      { name: 'TypeScript', kind: 'ts' },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { name: 'Go', kind: 'go' },
      { name: 'Node.js', kind: 'node' },
      { name: 'Express', kind: 'express' },
      { name: 'MongoDB', kind: 'mongodb' },
      { name: 'PostgreSQL', kind: 'postgres' },
      { name: 'Git', kind: 'git' },
    ],
  },
] as const;

const logoMap: Record<SkillKind, ReactNode> = {
  html: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#E44D26" d="M1.5 0h21l-1.9 21.5L12 24l-8.6-2.5L1.5 0zm17.1 4.3l-.2 2.5-7.5.3.1 3h7l-.2 3.2-2.4 1.1-2.4-1.1-.1-1.7H7.9l.2 3.9 4.4 1.3 4.4-1.3.6-6.3H9.2l-.1-2.8h9.5z" />
    </svg>
  ),
  css: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1F6FEB" d="M2 0h20l-1.8 20.3L12 24l-8.2-3.7L2 0zm15.8 4.7l-.4 3.5-6.4.3-.1 2.9h6.1l-.2 3-2.4 1.2-2.4-1.2-.2-2.3h-2.2l.3 4.6L12 19l4.5-1.7.9-9.6h-8.2l.1-2.9H17.8z" />
    </svg>
  ),
  js: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#F7DF1E" d="M1.5 0h21l-1.9 21.5L12 24l-8.6-2.5L1.5 0zm13.4 17.9l4.3-1.8.9-10.3H8.7l.2 2.9h7.3l-.2 2.5-4.1 1.8-4.3-1.9-.1-2.2h-2.5l.4 4.7 6.3 2.6 6.2-2.6.7-6.1H9.7l-.2-3.1h8.3l-.4 4.9-4.2 1.5z" />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1.4">
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  next: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#111827" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12c2.9 0 5.7-1 7.9-2.8L10.1 7.5v9.2h2.4V9.9l7.6 10.8A11.9 11.9 0 0 0 24 12c0-6.6-5.4-12-12-12zm-1.9 15.5h-2.3V8.5h2.3v7z" />
    </svg>
  ),
  ts: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#3178C6" d="M1.5 0h21v24h-21V0zm4.8 4.8v14.4h5.4v-2.1H9.5V7h2.2v-2.2H6.3zm9.6 0v2.2h2.5v9.8h-2.5v2.2h5.9V4.8h-5.9z" />
    </svg>
  ),
  go: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#00ADD8" d="M10 3.5c-.9 0-1.5.6-1.5 1.5v.9c0 .9.6 1.5 1.5 1.5h1.2v8.5c0 .9.6 1.5 1.5 1.5h2.4c.8 0 1.5-.6 1.5-1.5V7.4h1.2c.9 0 1.5-.6 1.5-1.5V5c0-.9-.6-1.5-1.5-1.5H10zm-5.9 3A1.6 1.6 0 0 0 2.5 8.1v7.8a1.6 1.6 0 0 0 1.6 1.6h3.3a1.6 1.6 0 0 0 1.6-1.6V8.1A1.6 1.6 0 0 0 7.4 6.5H4.1zm2.1 2.5h1.2v5.8H4.3v-5.8zm11.6-3.3h2v3.4h-2V8.7zm0 4.7h2v4.6h-2v-4.6zm-9.1-2.2h1.6v6.1H7.7v-6.1z" />
    </svg>
  ),
  node: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#5FA04E" d="M12 1.7L2.8 6.7v10.6L12 22.3l9.2-5V6.7L12 1.7zm0 2.5l7 4-7 4-7-4 7-4zm-8 5.7l6.5 3.7v7.5L4 17.6V9.9zm9.5 11.2v-7.5l6.5-3.7v7.7l-6.5 3.5z" />
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#111827" d="M3 5.5h18v13H3v-13zm2 2v9h14v-9H5zm2.5 2.5h9v2.5h-9v-2.5zm0 4h6.5v2H7.5v-2z" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4DB33D" d="M12 2.2c1.6 0 2.7 1.1 2.7 2.4v13.1c0 1.4-1.1 2.3-2.7 2.3s-2.7-.9-2.7-2.3V4.6c0-1.3 1.1-2.4 2.7-2.4zm-6 7.3c1 0 1.8.7 1.8 1.7v6.3c0 1-.8 1.7-1.8 1.7S4.2 18.5 4.2 17.5v-6.3c0-1 .8-1.7 1.8-1.7zm12 0c1 0 1.8.7 1.8 1.7v6.3c0 1-.8 1.7-1.8 1.7s-1.8-.7-1.8-1.7v-6.3c0-1 .8-1.7 1.8-1.7zm-4.5-4.1h2.9v2.4h-2.9V5.4zm0 8.4h2.9v2.4h-2.9v-2.4z" />
    </svg>
  ),
  postgres: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#336791" d="M5.5 2.5h13v19h-13v-19zm2 2v15h9v-15h-9zm1.5 2h6v2h-6V6.5zm0 4h6v2h-6v-2zm0 4h4.5v2H9v-2z" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#F05032" d="M12 1.5L2.5 11l9.5 9.5 9.5-9.5L12 1.5zm0 3.4l6.1 6.1L12 17.1 5.9 11l6.1-6.1zm-1.9 3.2h3.8v3.8h-3.8V8.1zm0 5h3.8v3.8h-3.8v-3.8z" />
    </svg>
  ),
};

function TechBadge({ name, kind }: SkillItem) {
  return (
    <span className={`${styles.chip} ${styles[kind]}`}>
      <span className={styles.logo}>{logoMap[kind]}</span>
      <span>{name}</span>
    </span>
  );
}

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.topbar} />

      <div className={styles.shell}>
        <aside className={styles.sidebar}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatar} aria-label="Profile avatar" />
          </div>

          <h1 className={styles.name}>Syed Fardin Ahmed</h1>
          <p className={styles.username}>
            <span className={styles.handle}>SyedFardinAhmed</span> · he/him
          </p>

          <button className={styles.followButton}>Unfollow</button>

          <div className={styles.badges}>
            <span className={styles.badge}>Full Stack Developer</span>
            <span className={styles.badge}>Data & Systems Enthusiast</span>
          </div>
        </aside>

        <section className={styles.content}>
          <div className={styles.readmeBar}>
            <span className={styles.readmePath}>SyedFardinAhmed / README.md</span>
          </div>

          <div className={styles.banner} />

          <div className={styles.intro}>
            <div className={styles.introRow}>
              <span className={styles.wave}>👋</span>
              <h2 className={styles.headline}>Hi, I&apos;m Syed Fardin Ahmed</h2>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>About Me</h3>

            <p className={styles.text}>
              I&apos;m a full-stack developer with a strong interest in web development and growing skills in
              modern frontend and backend technologies. I&apos;m passionate about building scalable,
              efficient, and user-centric software that solves real-world problems.
            </p>

            <p className={styles.text}>
              With hands-on experience across frontend, backend, and databases, I enjoy turning ideas
              into reliable, production-ready applications. I&apos;m also familiar with mobile app
              development and system-focused engineering, which helps me build solutions that work
              seamlessly across platforms.
            </p>

            <p className={styles.text}>
              I thrive in environments where technology meets innovation, and I&apos;m continuously learning
              to stay at the forefront of modern web technologies, AI, networking, and data-driven systems.
              My goal is to contribute to impactful projects that combine clean engineering, smart
              automation, and meaningful user experiences.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>What I&apos;m Currently Working On</h3>

            <ul className={styles.bulletList}>
              {currentWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.skillsWrap}>
            <h3 className={styles.sectionTitle}>Skills &amp; Technologies</h3>

            <div className={styles.skillGroups}>
              {skillGroups.map((group) => (
                <div key={group.title} className={styles.skillGroup}>
                  <h4 className={styles.skillGroupTitle}>{group.title}</h4>

                  <div className={styles.chips}>
                    {group.items.map((item) => (
                      <TechBadge key={item.name} {...item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
