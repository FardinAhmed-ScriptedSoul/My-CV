import styles from './page.module.css';

const currentWork = [
  'Exploring Next.js and its powerful features for modern web applications.',
  'Developing an exciting tourism website with interactive features and a seamless user experience.',
  'Learning machine learning and deep learning for intelligent, data-driven systems.',
  'Building robotics and UAV-related experimentation projects focused on control, sensing, and automation.',
  'Exploring networking technologies and embedded system integration for reliable communication stacks.',
  'Studying data mining, pattern discovery, and intelligent analytics workflows.',
  'Improving my UI/UX design skills to craft more intuitive interfaces.',
];

const skillGroups = [
  {
    title: 'Frontend Development',
    items: ['HTML', 'CSS', 'JS', 'React', 'Next.js', 'TS'],
  },
  {
    title: 'Backend & Data',
    items: ['Go', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Python'],
  },
  {
    title: 'Robotics & Systems',
    items: ['Networking', 'UAV', 'Robotics', 'IoT', 'Embedded', 'Automation'],
  },
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.topbar} />

      <div className={styles.shell}>
        <aside className={styles.sidebar}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatar} aria-label="Profile avatar" />
          </div>

          <h1 className={styles.name}>Ahmed Abrar Zayad</h1>
          <p className={styles.username}>
            <span className={styles.handle}>AhmedAbrarZayad</span> · he/him
          </p>

          <button className={styles.followButton}>Unfollow</button>

          <div className={styles.badges}>
            <span className={styles.badge}>Full Stack Developer</span>
            <span className={styles.badge}>Robotics Enthusiast</span>
          </div>
        </aside>

        <section className={styles.content}>
          <div className={styles.readmeBar}>
            <span className={styles.readmePath}>AhmedAbrarZayad / README.md</span>
          </div>

          <div className={styles.banner} />

          <div className={styles.intro}>
            <div className={styles.introRow}>
              <span className={styles.wave}>👋</span>
              <h2 className={styles.headline}>Hi, I&apos;m Ahmed Abrar Zayad</h2>
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
              development and system design, which helps me build solutions that work seamlessly across
              platforms.
            </p>

            <p className={styles.text}>
              I thrive in environments where technology meets innovation, and I&apos;m continuously learning
              to stay at the forefront of modern web technologies, AI, networking, robotics, and data
              mining. My goal is to contribute to impactful projects that combine clean engineering,
              smart automation, and meaningful user experiences.
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
                    {group.items.map((item, index) => (
                      <span
                        key={item}
                        className={`${styles.chip} ${styles[`color${(index % 6) + 1}`]}`}
                      >
                        {item}
                      </span>
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
