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
      I&apos;m <strong>Sam</strong>, a registered <strong>paramedic</strong>,{" "}
      <strong>simulation lecturer</strong> and serial fixer of things that probably shouldn&apos;t
      have been broken in the first place. I create immersive healthcare learning, build practical
      software and push for systems that work better for neurospicy brains.
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
        company: "SimHQ",
        timeframe: "Jun 2026–present",
        role: "Founder",
        achievements: [
          "Building SimHQ to address operational challenges experienced by healthcare simulation teams.",
          "Creates practical, user-focused software intended to help simulation teams work more efficiently.",
        ],
      },
      {
        company: "University of West London",
        timeframe: "Sep 2025–present",
        role: "Senior Lecturer - Simulation & Immersive Technologies",
        achievements: [
          "Provides academic leadership for simulation and immersive pedagogy across the College of Nursing, Midwifery & Healthcare, integrating high-fidelity simulation, VR and interactive methods across curricula.",
          "Mentors academic and technical staff, supports inclusive neuro-affirming design and serves as the College's AI Lead for responsible adoption of AI in education and practice.",
        ],
      },
      {
        company: "University of West London",
        timeframe: "Oct 2025–present",
        role: "Network Lead - Neurodivergent Staff Network",
        achievements: [
          "Leads the Neurodivergent Staff Network, supporting an inclusive and psychologically safe culture for colleagues across the university.",
          "Works with senior leadership, HR and EDI networks to influence policy, accessibility and neuro-affirming practice.",
        ],
      },
      {
        company: "University of West London",
        timeframe: "Feb 2026–present",
        role: "Advance UWL (HEA) Mentor & Assessor",
        achievements: [
          "Mentors colleagues developing evidence-based applications for Associate Fellowship and Fellowship of Advance HE.",
          "Assesses written applications against the Professional Standards Framework as part of fellowship award panels.",
        ],
      },
      {
        company: "University of West London",
        timeframe: "Feb 2026–present",
        role: "Fitness to Practice Investigator",
        achievements: [
          "Conducts investigations into concerns about student conduct, behaviour and professional suitability under institutional regulations and professional standards.",
          "Gathers and analyses evidence, interviews relevant parties and prepares reports with proportionate recommendations for panels.",
        ],
      },
      {
        company: "University of West London",
        timeframe: "Sep 2025–present",
        role: "Course Lead - MSc Simulated Practice Education",
        achievements: [
          "Leads the programme's design, validation, delivery, assessment strategy, quality assurance and continuing enhancement.",
          "Oversees delivery across sites and simulation facilities, using immersive technologies, high-fidelity simulation and structured debriefing in teaching and assessment.",
        ],
      },
      {
        company: "University of West London",
        timeframe: "Nov 2025–Mar 2026",
        role: "Deputy / Acting Lead for Simulation & Immersive Technologies",
        achievements: [
          "Provided continuity of leadership for the Simulation Centre and associated services during the substantive lead's absence.",
          "Oversaw day-to-day operations across sites, stakeholder communication, urgent resource decisions and risk management.",
        ],
      },
      {
        company: "University of West London",
        timeframe: "Sep 2024–Sep 2025",
        role: "Module Lead - Nursing Practice, Drug Calculation & Practice Hours",
        achievements: [
          "Led the academic delivery for final-year students across Children, Learning Disability, Mental Health and Adult Nursing pathways.",
          "Designed and delivered module content using blended learning and digital technologies to support preparation for professional practice.",
        ],
      },
      {
        company: "University of West London",
        timeframe: "Apr 2023–Sep 2025",
        role: "Lecturer - Simulation & Immersive Technologies",
        achievements: [
          "Designed and delivered simulation-based learning across nursing, paramedic and other healthcare programmes.",
          "Integrated high-fidelity simulation, virtual reality and interactive methods to connect theory with clinical practice.",
        ],
      },
      {
        company: "University of West London",
        timeframe: "May 2023–Sep 2024",
        role: "Module Lead - BNurs(Hons) Nursing Practice, Drug Calculation & Practice Hours",
        achievements: [
          "Led the module across all three years of the BNurs(Hons) programme and its four nursing pathways across multiple sites.",
          "Designed and delivered module content using blended learning and digital technologies to support clinical and theoretical development.",
        ],
      },
      {
        company: "London Ambulance Service NHS Trust",
        timeframe: "May 2022–Feb 2023",
        role: "Armed Forces Network Service Champion",
        achievements: [
          "Provided support, guidance and advocacy for staff, service users and relatives from the Armed Forces community.",
          "Acted as a point of contact for queries and signposted military personnel and veterans to relevant services and resources.",
        ],
      },
      {
        company: "London Ambulance Service NHS Trust",
        timeframe: "Sep 2021–Feb 2023",
        role: "End of Life Care Coordinator",
        achievements: [
          "Organised continuing professional development events focused on end-of-life care with clinical stakeholders.",
          "Provided drop-in guidance and signposting for clinicians, connecting them with the service's end-of-life care team.",
        ],
      },
      {
        company: "London Ambulance Service NHS Trust",
        timeframe: "Jul 2021–Feb 2023",
        role: "Group Improvement and Staff Survey Lead",
        achievements: [
          "Worked between staff and management on local facilities, working-environment improvements and staff-wellbeing initiatives.",
          "Coordinated monthly continuing professional development events, town halls and other staff-engagement opportunities.",
        ],
      },
      {
        company: "London Ambulance Service NHS Trust",
        timeframe: "Jun 2020–Feb 2023",
        role: "Emergency Medical Technician (EMT)",
        achievements: [
          "Responded to 999 emergencies and urgent-care cases in Central London alongside qualified clinicians and student paramedics.",
          "Developed frontline experience in pre-hospital emergency care, patient assessment and clinical decision-making.",
        ],
      },
      {
        company: "London Ambulance Service NHS Trust",
        timeframe: "Sep 2019–Feb 2023",
        role: "SORT Operative (CBRN & MTA)",
        achievements: [
          "Trained to respond to mass-casualty incidents and contaminated-patient scenarios, including triage, decontamination and patient management in hazardous environments.",
          "Deployed to marauding-terrorist-attack incidents across London to provide medical support in high-risk conditions.",
        ],
      },
      {
        company: "British Army",
        timeframe: "Nov 2022–Apr 2024",
        role: "Climate Assessor",
        achievements: [
          "Conducted Level 2 and Level 3 assessments of soldiers' and officers' lived experiences in Field Army units in the UK and overseas.",
          "Facilitated focus groups and produced evidence-led reports with recommendations for senior leadership and organisational improvement.",
        ],
      },
      {
        company: "British Army",
        timeframe: "Mar 2022–Apr 2024",
        role: "Combat Medical Technician (Paramedic)",
        achievements: [
          "Practised as an autonomous clinician across Role 1, Role 2 and Role 3 medical facilities during exercises in the UK and overseas.",
          "Delivered trauma care and developed training for other Combat Medical Technicians through virtual and in-person instruction.",
        ],
      },
      {
        company: "British Army",
        timeframe: "Jan 2021–Apr 2024",
        role: "Multiple Clinical Faculties",
        achievements: [
          "Provided specialist teaching and mentoring for military personnel across several clinical faculties.",
          "Instructed on Battlefield Advanced Trauma Life Support, Emergency Management of Severe Burns and the CBRN Medic course.",
        ],
      },
      {
        company: "British Army",
        timeframe: "Sep 2021–Dec 2023",
        role: "Phase 1 (R) Instructor",
        achievements: [
          "Mentored and instructed reservists during basic training through virtual and in-person military and medical teaching.",
          "Served as a Section Commander with responsibility for recruits' welfare, discipline and development.",
        ],
      },
      {
        company: "Self Employed",
        timeframe: "Feb 2022–present",
        role: "Registered Paramedic | Clinical Trainer | Tutor | Coach & Mentor",
        achievements: [
          "Provides registered paramedic care across events, film sets and other environments requiring medical support.",
          "Delivers instruction and mentoring intended to support professional skills, knowledge and development.",
        ],
      },
      {
        company: "International Journal of Healthcare Simulation",
        timeframe: "Jul 2024–present",
        role: "Article Peer-Reviewer",
        achievements: [
          "Evaluates healthcare-simulation manuscripts, provides constructive feedback and makes recommendations for publication.",
          "Works with editors and authors to support scientific rigour and the dissemination of relevant simulation research.",
        ],
      },
      {
        company: "British Burn Association",
        timeframe: "Jan 2021–present",
        role: "Clinical Faculty",
        achievements: [
          "Provides specialist instruction on assessment and management of severe burns as faculty for the Emergency Management of Severe Burns course.",
          "Delivers hands-on training for military and NHS professionals working in high-pressure clinical environments.",
        ],
      },
      {
        company: "Brunel University of London",
        timeframe: "Oct 2024–Feb 2025",
        role: "Guest Lecturer",
        achievements: [
          "Delivered guest lectures on specialised healthcare topics using practical and professional examples.",
          "Worked with faculty to align interactive sessions with course objectives and student learning needs.",
        ],
      },
      {
        company: "HCRG Care Group",
        timeframe: "Jan 2023–Jun 2023",
        role: "Statutory & Mandatory Trainer",
        achievements: [
          "Delivered statutory and mandatory training for clinical professionals to support competency and regulatory compliance.",
          "Focused teaching on patient safety, core clinical skills and current professional requirements.",
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
        description:
          "University of Cumbria · Sep 2024–Sep 2027 · Ongoing",
      },
      {
        name: "PgCert Professional Academic Practice",
        description:
          "University of West London · Sep 2023–Aug 2024",
      },
      {
        name: "DipHE Paramedic Practice",
        description:
          "University of Cumbria · Nov 2020–Dec 2021",
      },
      {
        name: "Fellow of the Higher Education Academy (FHEA)",
        description:
          "Higher Education Academy · Nov 2024-Present",
      },
      {
        name: "Registered Paramedic",
        description:
          "Health and Care Professions Council · Feb 2022-Present",
      },
      {
        name: "CS50: Introduction to Computer Science",
        description:
          "Harvard John A. Paulson School of Engineering and Applied Sciences · Dec 2023–Feb 2024",
      },
    ],
  },
  technical: {
    display: true,
    title: "Things I know a bit about",
    skills: [
      {
        title: "Healthcare simulation and immersive learning",
        description:
          "Designing simulation-based curricula, immersive scenarios and quality-improvement work that connects educational purpose with realistic clinical practice.",
        tags: [
          { name: "Healthcare simulation" },
          { name: "Scenario design" },
          { name: "Immersive learning" },
        ],
      },
      {
        title: "Paramedic and emergency care",
        description:
          "Bringing registered paramedic practice, emergency response and clinical decision-making into education, training and software design.",
        tags: [
          { name: "Paramedic practice" },
          { name: "Clinical decision-making" },
          { name: "Emergency response" },
        ],
      },
      {
        title: "Higher education and neuroinclusion",
        description:
          "Leading curriculum development, mentoring educators and shaping neuro-affirming learning and working environments.",
        tags: [
          { name: "Curriculum development" },
          { name: "Academic mentoring" },
          { name: "Neuroinclusive design" },
        ],
      },
      {
        title: "Software, responsible AI and cybersecurity",
        description:
          "Building practical software, contributing to responsible AI standards and developing cybersecurity knowledge through current professional practice and study.",
        tags: [
          { name: "Software development" },
          { name: "Responsible AI" },
          { name: "Cybersecurity" },
        ],
      },
    ],
  },
  contributions: {
    display: true,
    title: "Elsewhere",
    items: [
      {
        title: "Responsible AI in professional education",
        description:
          "Contributed to the HCPC expert panel review of the Standards of Education and Training, focusing on AI literacy, academic integrity and implementable safeguards from Dec 2024 to Dec 2025.",
      },
      {
        title: "Palliative and end-of-life care",
        description:
          "Founding member of the College of Paramedics PEOLC special-interest group since Jun 2022, contributing to policy, professional education and practice development.",
      },
      {
        title: "Academic peer review",
        description:
          "Reviews manuscripts for the International Journal of Healthcare Simulation and the Journal of Public Health and Community Medicine, providing constructive, evidence-based recommendations.",
      },
      {
        title: "Neurodivergent staff advocacy",
        description:
          "Leads the University of West London Neurodivergent Staff Network, working on institutional accessibility, policy and neuro-affirming practice since Oct 2025.",
      },
      {
        title: "Fellowship mentoring and assessment",
        description:
          "Mentors Advance UWL applicants and serves on assessment panels for Associate Fellowship and Fellowship of Advance HE since Feb 2026.",
      },
      {
        title: "Scholarship and professional speaking",
        description:
          "Presented work during 2024 and 2025 on ADHD, neuroinclusive education, responsible AI and simulated electronic patient records in healthcare education.",
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
