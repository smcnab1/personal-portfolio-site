import type { About, Blog, Contact, Home, NavigationItem, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sam",
  lastName: "McNab",
  name: "Sam McNab",
  role: "Paramedic, educator and software builder",
  avatar: "/images/avatar-sam-mcnab.webp",
  avatarAlt: "Sam McNab wearing a blue shirt",
  email: "sam@sammcnab.co.uk",
  location: "High Wycombe, Buckinghamshire, UK",
  timeZone: "Europe/London",
  languages: ["English"],
  locale: "en-GB",
  url: "https://sammcnab.co.uk",
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/smcnab1",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sammcnab/",
    essential: true,
  },
  {
    name: "ORCID",
    icon: "orcid",
    link: "https://orcid.org/0009-0009-4568-9853",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const navigation: NavigationItem[] = [
  { path: "/", label: "Home", icon: "home" },
  { path: "/about", label: "About", icon: "person" },
  { path: "/work", label: "Work", icon: "grid" },
  { path: "/blog", label: "Writing", icon: "book" },
  { path: "/contact", label: "Contact", icon: "email" },
];

const home: Home = {
  path: "/",
  image: person.avatar,
  label: "Home",
  title: "Sam McNab — Paramedic, educator and software builder",
  description:
    "Sam McNab connects clinical practice, healthcare simulation, inclusive education and practical software development.",
  eyebrow: "Paramedic · Educator · Software Builder",
  headline: <>I build better ways to learn, simulate and work.</>,
  subline: (
    <>
      I&apos;m Sam McNab — a registered paramedic and Senior Lecturer in Simulation &amp; Immersive
      Technologies. I design realistic healthcare learning, build practical software, and advocate
      for systems that work better for neurodivergent people.
    </>
  ),
  actions: [
    { label: "View my work", href: "/work", primary: true },
    { label: "About me", href: "/about" },
  ],
  secondaryLinks: [
    { label: "SimHQ", href: "https://simhq.app", icon: "arrowUpRightFromSquare" },
    { label: "Writing", href: "/blog", icon: "book" },
    { label: "GitHub", href: "https://github.com/smcnab1", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sammcnab/",
      icon: "linkedin",
    },
  ],
  focusAreas: [
    {
      title: "Simulation and immersive learning",
      description:
        "Realistic, inclusive learning that helps healthcare professionals rehearse difficult work safely.",
    },
    {
      title: "Practical software",
      description:
        "Tools that remove friction from simulation operations, education and everyday workflows.",
    },
    {
      title: "Neuroinclusive systems",
      description:
        "Teaching, technology and working practices designed with different ways of thinking in mind.",
    },
  ],
  credibility: ["Registered paramedic", "Senior Lecturer", "Founder of SimHQ"],
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About Sam McNab",
  description:
    "Sam McNab is a registered paramedic, simulation educator, neurodiversity advocate and software builder based in Buckinghamshire.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <Text as="p">
          I work where clinical practice, higher education and technology meet. My starting point is
          usually the same: understand the real problem, reduce unnecessary friction, and build
          something people can use.
        </Text>
        <Text as="p">
          Today, that means leading simulation and immersive learning at the University of West
          London, building SimHQ, contributing to work around healthcare AI, and advocating for
          neurodivergent staff and students.
        </Text>
      </>
    ),
  },
  work: {
    display: true,
    title: "Selected roles",
    experiences: [
      {
        company: "University of West London",
        timeframe: "2025–present",
        role: "Senior Lecturer in Simulation & Immersive Technologies",
        achievements: [
          "Course leadership for the MSc Simulated Practice Education, alongside teaching, curriculum design and personal tutoring across healthcare programmes.",
          "Designs high-fidelity, scenario-based and immersive learning for undergraduate and postgraduate learners.",
          "Leads and contributes to work around generative AI, inclusive education and neurodivergent staff experience within the College of Nursing, Midwifery and Healthcare.",
        ],
      },
      {
        company: "SimHQ",
        timeframe: "Current",
        role: "Founder and builder",
        achievements: [
          "Building a modular platform for the practical work behind healthcare simulation centres, including room operations, support and asset workflows.",
          "Combines product thinking, software development and first-hand simulation experience to keep the tools grounded in real operational needs.",
        ],
      },
      {
        company: "Clinical and instructional practice",
        timeframe: "2016–present",
        role: "Registered paramedic, former ambulance clinician and military instructor",
        achievements: [
          "Trained as a Combat Medical Technician before completing a DipHE in Paramedic Practice and working in ambulance-service and independent clinical settings.",
          "Clinical practice and instructional experience continue to shape how I design simulation, software and education.",
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "MSc Paramedic: Practice Development",
        description: "Current postgraduate study.",
      },
      {
        name: "Professional Academic Practice",
        description: "Postgraduate study at the University of West London.",
      },
      {
        name: "DipHE Paramedic Practice",
        description: "University of Cumbria, completed in 2021.",
      },
    ],
  },
  technical: {
    display: true,
    title: "Areas of practice",
    skills: [
      {
        title: "Healthcare simulation",
        description:
          "Scenario design, facilitation, high-fidelity simulation, immersive technologies and simulation-based curriculum design.",
        tags: [{ name: "Scenario design" }, { name: "Debriefing" }, { name: "Immersive learning" }],
      },
      {
        title: "Inclusive education",
        description:
          "Neuro-affirming teaching, accessible learning design and practical changes that make systems easier to navigate.",
        tags: [
          { name: "Neurodiversity" },
          { name: "Universal design" },
          { name: "Staff advocacy" },
        ],
      },
      {
        title: "Software and AI",
        description:
          "Web applications, workflow automation and careful use of generative AI for education and simulation.",
        tags: [{ name: "Product development" }, { name: "Automation" }, { name: "Generative AI" }],
      },
    ],
  },
  contributions: {
    display: true,
    title: "Professional contributions",
    items: [
      {
        title: "Healthcare AI",
        description: "Member of the HCPC AI Expert Panel and AI lead within CNMH.",
      },
      {
        title: "Professional communities",
        description:
          "Contributions to College of Paramedics and ASPiH special-interest groups, peer review, and simulation education communities.",
      },
      {
        title: "Academic development",
        description:
          "Advance HE mentoring and assessment, with a focus on reflective and inclusive practice.",
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Writing",
  title: "Writing and publications",
  description:
    "Selected publications, presentations and notes by Sam McNab on simulation, AI and neuroinclusive education.",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Selected work",
  description:
    "Selected projects and programmes spanning healthcare simulation, inclusive education and practical software.",
  introduction:
    "A small set of projects that show how I connect clinical practice, education and technology. Where formal outcome data is not public, I describe the work and its current status plainly.",
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: "Contact Sam McNab",
  description:
    "Contact Sam McNab about healthcare simulation, education, speaking, collaboration or software projects.",
  introduction:
    "The simplest way to reach me is by email. You can also find my current work and professional profiles below.",
  availability:
    "I am happy to hear about thoughtful collaborations across healthcare simulation, education, neuroinclusion and practical software.",
};

export { person, social, navigation, home, about, blog, work, contact };
