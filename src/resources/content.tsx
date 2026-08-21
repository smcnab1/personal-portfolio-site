import type { About, Blog, Contact, Home, NavigationItem, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sam",
  lastName: "McNab",
  name: "Sam McNab",
  role: "Paramedic, educator and software builder",
  avatar: "/images/my-avatar.png",
  avatarAlt: "Sam McNab as a genmoji",
  email: "sam@sammcnab.co.uk",
  location: "Buckinghamshire, UK",
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
  title: "Sam McNab | Paramedic, educator and software builder",
  description:
    "Sam McNab connects clinical practice, healthcare simulation, inclusive education and practical software development.",
  eyebrow: "Paramedic · Educator · Software Builder · Cybersecurity",
  headline: <>I build better ways to learn, simulate and work.</>,
  subline: (
    <>
      I&apos;m <strong>Sam</strong>, a registered <strong>paramedic</strong>, <strong>simulation lecturer</strong> and serial fixer of things that probably shouldn&apos;t have been broken in the first place. 
      I create immersive healthcare learning, build practical software and push for systems that work better for neurospicy brains.
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
      "Realistic, inclusive learning that lets healthcare professionals practise the difficult stuff before it happens for real.",
  },
  {
    title: "Practical software",
    description:
      "Useful tools for simulation, education and everyday work - usually built because the existing way was doing my head in.",
  },
  {
    title: "Neuroinclusive systems",
    description:
      "Teaching, technology and working practices designed for different brains, not one mythical ‘normal’ person.",
  },
],
credibility: ["Registered Paramedic", "Senior Lecturer", "Founder of SimHQ"],
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About Sam McNab",
  description:
    "Sam McNab is a registered paramedic, simulation educator and software builder from Buckinghamshire, working across immersive learning, healthcare technology and neuroinclusion.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "A bit about me",
    description: (
      <>
        <Text as="p">
          I work somewhere between clinical practice, higher education and technology - usually
          trying to fix something that is more complicated than it needs to be. I start by finding
          the actual problem, removing the unnecessary faff and building something people can
          genuinely use.
        </Text>
        <Text as="p">
          These days, that includes leading simulation and immersive learning at the University of
          West London, building SimHQ, contributing to work around healthcare AI and advocating for
          neurodivergent staff and students.
        </Text>
      </>
    ),
  },
  work: {
    display: true,
    title: "What I do",
    experiences: [
      {
        company: "University of West London",
        timeframe: "2025 to present",
        role: "Senior Lecturer in Simulation & Immersive Technologies",
        achievements: [
          "Leads the MSc Simulated Practice Education while teaching, designing curricula and supporting students across healthcare programmes.",
          "Designs high-fidelity scenarios and immersive learning that prepare people for the difficult, messy and occasionally unpredictable reality of healthcare.",
          "Leads and contributes to work around generative AI, inclusive education and the experiences of neurodivergent staff within the College of Nursing, Midwifery and Healthcare.",
        ],
      },
      {
        company: "SimHQ",
        timeframe: "Current",
        role: "Founder and builder",
        achievements: [
          "Building a modular platform to handle the behind-the-scenes work of healthcare simulation centres, including rooms, support and equipment.",
          "Combines software development, product thinking and first-hand simulation experience to create tools based on how centres actually work - not how somebody assumes they work.",
        ],
      },
      {
        company: "Clinical and instructional practice",
        timeframe: "2016–present",
        role: "Registered paramedic, former ambulance clinician and military instructor",
        achievements: [
          "Started out as a Combat Medical Technician, later completed a DipHE in Paramedic Practice and worked across ambulance-service and independent clinical settings.",
          "That mix of clinical and instructional experience still shapes how I approach simulation, education and the software I build.",
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "The qualification bit",
    institutions: [
      {
        name: "MSc Paramedic: Practice Development",
        description: "Current postgraduate study - because apparently I needed another project.",
      },
      {
        name: "Professional Academic Practice",
        description: "Postgraduate study completed at the University of West London.",
      },
      {
        name: "DipHE Paramedic Practice",
        description: "University of Cumbria, completed in 2021.",
      },
    ],
  },
  technical: {
    display: true,
    title: "Things I know a bit about",
    skills: [
      {
        title: "Healthcare simulation",
        description:
          "Designing and delivering scenarios, high-fidelity simulation, immersive experiences and simulation-based curricula that have a clear reason for existing.",
        tags: [
          { name: "Scenario design" },
          { name: "Debriefing" },
          { name: "Immersive learning" },
        ],
      },
      {
        title: "Inclusive education",
        description:
          "Neuro-affirming teaching, accessible learning design and practical changes that make education and work easier to navigate.",
        tags: [
          { name: "Neurodiversity" },
          { name: "Universal design" },
          { name: "Staff advocacy" },
        ],
      },
      {
        title: "Software and AI",
        description:
          "Web applications, workflow automation and sensible uses of generative AI - with slightly less enthusiasm for using AI where a normal button would do.",
        tags: [
          { name: "Product development" },
          { name: "Automation" },
          { name: "Generative AI" },
        ],
      },
    ],
  },
  contributions: {
    display: true,
    title: "Elsewhere",
    items: [
      {
        title: "Healthcare AI",
        description:
          "Member of the HCPC AI Expert Panel and AI lead within the College of Nursing, Midwifery and Healthcare.",
      },
      {
        title: "Professional communities",
        description:
          "Contributes to College of Paramedics and ASPiH special-interest groups, peer review and the wider simulation education community.",
      },
      {
        title: "Academic development",
        description:
          "Advance HE mentoring and assessment, focused on reflective, inclusive practice that remains useful once the paperwork is finished.",
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Writing",
  title: "Things I’ve written",
  description:
    "Publications, presentations and occasional thoughts from Sam McNab on simulation, healthcare AI and neuroinclusive education.",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Things I’ve worked on",
  description:
    "Projects and programmes spanning healthcare simulation, inclusive education and practical software.",
  introduction:
    "A selection of work connecting clinical practice, education and technology. Where formal results are not publicly available, I explain what I built, why I built it and where it is now - without inventing impressive-looking numbers.",
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: "Get in touch",
  description:
    "Contact Sam McNab about healthcare simulation, education, speaking, collaboration or software projects.",
  introduction:
    "Email is the simplest way to reach me. You can also find my current work and professional profiles below.",
  availability:
    "I’m open to interesting, useful collaborations across healthcare simulation, education, neuroinclusion and practical software.",
};

export { person, social, navigation, home, about, blog, work, contact };