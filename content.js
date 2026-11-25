/* ============================================================
   All hero copy lives here — edit text freely without touching
   animation logic (script.js) or presentation (styles.css).
   index.html carries the same strings as a no-JS fallback.
   ============================================================ */
const heroContent = {
  nav: [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#section-03" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  cta: { label: "Let’s Talk", href: "#contact" },

  headline: "Suriamahadevi",
  role: ["Aesthetic", "Software Developer"],
  meta: ["Web", "App", "Code"],

  notification: {
    name: "Suriamahadevi",
    time: "now",
    lead: "Aesthetic",
    message: "software developer — building clean code and digital solutions.",
  },

  section2: {
    sideLeft: ["MyCreativeHunch", "Solutions."],
    sideRight: ["Passion.", "Creativity."],
  },

  /* My Works — add projects here (image + metadata per card); the Works
     carousel builds itself from this array. `teaser: true` cards are
     decorative edge slices and never become the active project. */
  works: {
    projects: [
      { key: "gainers", name: "Gainers Controls", img: "assets/work-gainers.jpg", w: 1832, h: 858,
        cat: "Corporate · Industrial", accent: "#4da3ff", url: "https://www.gainerss.com/",
        title: "A corporate website developed for Gainers Group, showcasing textile automation, fiber laser machinery and precision sheet metal fabrication solutions." },
      { key: "jana", name: "JANA Finance & Chit Fund", img: "assets/work-jana.jpg", w: 1847, h: 851,
        cat: "FinTech · Platform", accent: "#a8e063", url: "https://jana-finance-preview.netlify.app/login",
        title: "A finance and chit fund management platform featuring customer authentication, chit fund plans, member management and financial tracking." },
      { key: "sieme", name: "SIEME Technology", img: "assets/work-sieme.jpg", w: 1829, h: 860,
        cat: "Corporate · Technology", accent: "#f28b3c", url: "https://sieme.in/",
        title: "A premium corporate technology website showcasing intelligent products, modern technology solutions and luxury-inspired digital experiences." },
    ],
  },

  /* ---- BIG ROBOT section (the original large Nexbot experience) ----
     All copy is editable here; the 3D and the scroll journey never
     touch these strings. */
  bigRobot: {
    labels: { left: "MERN Stack Developer", right: "Software · Creative Technology" },
    eyebrow: "( 05 · The Mind )",
    titleLines: ["I build software that", "looks as good as it works."],
    description: "I like understanding what’s underneath the interface — then finding a better way to build it.",
    hint: "Scroll to move through the ideas.",

    /* the panels that travel through the 3D space — add or edit freely */
    techIdeas: [
      {
        no: "01",
        title: "AI & Intelligent Systems",
        description: "Exploring how software can become more adaptive, useful and intelligent.",
        tags: ["AI", "Machine Learning", "LLMs", "Automation", "Experimentation"],
      },
      {
        no: "02",
        title: "Software & Systems",
        description: "Understanding how individual pieces become systems that actually work together.",
        tags: ["Algorithms", "Architecture", "APIs", "Databases", "Web", "System Design"],
      },
    ],

  },

  /* ---- EDITORIAL / SKILLS section (scroll-choreographed) ----
     The statement enters from the left, the skills from the right,
     one item at a time. Copy only — the timeline lives in script.js. */
  editorial: {
    eyebrow: "( 06 · The Method )",
    statement: ["Code is my medium.", "Curiosity is my engine."],
    note: "I’m interested in what happens when technical thinking meets good design.",
    skills: {
      title: "I Work With",
      groups: [
        { name: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
        { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Responsive Design"] },
        { name: "Backend", items: ["Node.js", "Express.js", "MongoDB", "REST APIs"] },
      ],
    },
    mindset: {
      title: "Learn → Build → Break → Improve",
      lines: [
        "I learn by building.",
        "I build by experimenting.",
        "I experiment by breaking things.",
        "And I improve by understanding why they broke.",
      ],
    },
    exploring: {
      title: "Currently Exploring",
      items: [
        "Building better web experiences",
        "Learning system design",
        "Experimenting with AI",
        "Understanding software architecture",
        "Creating interactive interfaces",
      ],
    },
    ending: { lines: ["Still learning.", "Still building.", "Still curious."], note: "And probably always will be." },
  },

  /* ---- SMALL ROBOT section (its own minimal chapter) ---- */
  smallRobot: {
    eyebrow: "( 06 · Still Curious )",
    titleLines: ["Always looking", "for the next thing."],
    description: "A small machine, quietly paying attention — the way I try to.",
    note: "Move your cursor · it follows",
  },

  /* ---- FOOTER ----
     Edit freely. The LinkedIn / GitHub / Instagram icons live in
     index.html (.ft-social); `social` stays empty so they are not
     repeated as a text column. The email opens a Gmail compose tab. */
  footer: {
    eyebrow: "( 07 \u00b7 Contact )",
    headline: ["Let\u2019s build", "something good."],
    line: "Open to internships, freelance work and interesting problems.",
    email: "suriamahadevi@gmail.com",
    emailLabel: "Say hello",
    columns: [
      {
        title: "Sections",
        items: [
          { label: "Hero", href: "#top" },
          { label: "Creative", href: "#work" },
          { label: "About", href: "#section-03" },
          { label: "Selected Works", href: "#projects" },
          { label: "The Mind", href: "#think" },
        ],
      },
      {
        title: "Method",
        items: [
          { label: "How I think", href: "#method" },
          { label: "What I work with", href: "#method" },
          { label: "Currently exploring", href: "#method" },
          { label: "Still curious", href: "#curious" },
        ],
      },
    ],
    social: [],
    legal: "\u00a9 2026 Suriamahadevi",
    note: "Built with code and curiosity.",
    backToTop: "Back to top",
  },

  /* ---- AVAILABILITY (static status in the Contact section) ----
     Update by hand: change the text, or set show: false to hide it. */
  availability: { show: true, text: "Available for opportunities" },


  /* About Me chapter — replace these placeholder strings with the final copy. */
  about: {
    boxes: {
      who:   { title: "Who I Am",   sub: "Suriamahadevi — MERN stack developer." },
      what:  { title: "What I Do",  sub: "Web · App · Code" },
      think: { title: "How I Think", sub: "Idea · Design · Develop · Deploy · Impact" },
    },
    views: {
      who: {
        eyebrow: "01 — Who I Am",
        head: "Suriamahadevi",
        text: "I’m a MERN Stack Developer passionate about building modern web applications and meaningful digital experiences. I turn ideas into functional, elegant solutions through code, creativity and continuous learning.",
      },
      what: {
        eyebrow: "02 — What I Do",
        head: "Code Into Solutions.",
        text: "Where code meets creative thinking — web, apps, systems, APIs, AI and automation. Built with passion, driven by creativity.",
      },
      think: {
        eyebrow: "03 — How I Think",
        head: "Idea to Impact",
        text: "Idea · Design · Develop · Deploy · Impact.",
      },
    },
  },
};
