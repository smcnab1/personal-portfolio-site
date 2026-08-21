import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";
import { groupExperiencesByCompany, keyExperiences } from "../src/app/about/groupExperiences.ts";

const repositoryRoot = new URL("../", import.meta.url);

async function mdxFiles(directory) {
  const entries = await readdir(new URL(directory, repositoryRoot));
  return entries.filter((entry) => entry.endsWith(".mdx")).sort();
}

test("portfolio includes complete project and writing collections", async () => {
  const projects = await mdxFiles("src/app/work/projects/");
  const writing = await mdxFiles("src/app/blog/posts/");

  assert.equal(projects.length, 6);
  assert.equal(writing.length, 4);

  for (const relativePath of [
    ...projects.map((file) => `src/app/work/projects/${file}`),
    ...writing.map((file) => `src/app/blog/posts/${file}`),
  ]) {
    const source = await readFile(new URL(relativePath, repositoryRoot), "utf8");
    assert.match(
      source,
      /^---\n[\s\S]*title: ".+"\n[\s\S]*publishedAt: "\d{4}-\d{2}-\d{2}"\n[\s\S]*summary: ".+"\n[\s\S]*---/,
    );
  }
});

test("project ordering is explicit and unique", async () => {
  const projects = await mdxFiles("src/app/work/projects/");
  const orders = [];

  for (const project of projects) {
    const source = await readFile(
      new URL(`src/app/work/projects/${project}`, repositoryRoot),
      "utf8",
    );
    const order = source.match(/^order: (\d+)$/m)?.[1];
    assert.ok(order, `${project} is missing an order`);
    orders.push(Number(order));
  }

  assert.deepEqual(
    orders.sort((a, b) => a - b),
    [1, 2, 3, 4, 5, 6],
  );
});

test("public content contains no former template identities", async () => {
  const files = [
    "src/resources/content.tsx",
    "src/resources/once-ui.config.ts",
    "src/app/layout.tsx",
    "README.md",
  ];
  const source = (
    await Promise.all(files.map((file) => readFile(new URL(file, repositoryRoot), "utf8")))
  ).join("\n");

  for (const formerIdentity of [
    "Selene",
    "Jakarta",
    "example@gmail.com",
    "demo.magic-portfolio.com",
  ]) {
    assert.equal(source.includes(formerIdentity), false, formerIdentity);
  }
});

test("authoritative public links are configured once", async () => {
  const content = await readFile(new URL("src/resources/content.tsx", repositoryRoot), "utf8");
  const expectedLinks = [
    "https://www.linkedin.com/in/sammcnab/",
    "https://github.com/smcnab1",
    "https://orcid.org/0009-0009-4568-9853",
    "https://sammcnab.co.uk",
    "sam@sammcnab.co.uk",
  ];

  for (const link of expectedLinks) {
    assert.ok(content.includes(link), link);
  }
});

test("work experience preserves the approved role inventory and format", async () => {
  const content = await readFile(new URL("src/resources/content.tsx", repositoryRoot), "utf8");
  const experiencesSource = content.match(
    /experiences: \[([\s\S]*?)\n {4}\],\n {2}},\n {2}studies:/,
  )?.[1];

  assert.ok(experiencesSource, "about.work.experiences was not found");

  const experiences = [
    ...experiencesSource.matchAll(
      /\{\s+company: "([^"]+)",\s+timeframe: "([^"]+)",\s+role: "([^"]+)",\s+achievements: \[([\s\S]*?)\s+\],\s+\},/g,
    ),
  ].map(([, company, timeframe, role, achievements]) => ({
    company,
    timeframe,
    role,
    achievementCount: [...achievements.matchAll(/^\s+"/gm)].length,
  }));
  const timeframePattern =
    /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}–(?:present|(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4})$/;

  assert.equal(experiences.length, 24);
  assert.ok(experiences.every(({ timeframe }) => timeframePattern.test(timeframe)));
  assert.ok(
    experiences.every(({ achievementCount }) => achievementCount >= 1 && achievementCount <= 2),
  );
  assert.deepEqual(
    experiences
      .filter(({ company }) => company === "University of West London")
      .map(({ role }) => role),
    [
      "Senior Lecturer - Simulation & Immersive Technologies",
      "Network Lead - Neurodivergent Staff Network",
      "Advance UWL (HEA) Mentor & Assessor",
      "Fitness to Practice Investigator",
      "Course Lead - MSc Simulated Practice Education",
      "Deputy / Acting Lead for Simulation & Immersive Technologies",
      "Module Lead - Nursing Practice, Drug Calculation & Practice Hours",
      "Lecturer - Simulation & Immersive Technologies",
      "Module Lead - BNurs(Hons) Nursing Practice, Drug Calculation & Practice Hours",
    ],
  );
  assert.ok(
    experiences.some(
      ({ company, role, timeframe }) =>
        company === "SimHQ" && role === "Founder" && timeframe === "Jun 2026–present",
    ),
  );
});

test("about profile sections preserve the approved curated content", async () => {
  const content = await readFile(new URL("src/resources/content.tsx", repositoryRoot), "utf8");
  const studiesSource = content.match(/studies: \{([\s\S]*?)\n {2}\},\n {2}technical:/)?.[1];
  const technicalSource = content.match(
    /technical: \{([\s\S]*?)\n {2}\},\n {2}contributions:/,
  )?.[1];
  const contributionsSource = content.match(/contributions: \{([\s\S]*?)\n {2}\},\n\};/)?.[1];

  assert.ok(studiesSource, "about.studies was not found");
  assert.ok(technicalSource, "about.technical was not found");
  assert.ok(contributionsSource, "about.contributions was not found");

  assert.deepEqual(
    [...studiesSource.matchAll(/^ {8}name: "([^"]+)"/gm)].map(([, name]) => name),
    [
      "MSc Paramedic: Practice Development",
      "PgCert Professional Academic Practice",
      "DipHE Paramedic Practice",
      "Fellow of the Higher Education Academy (FHEA)",
      "Registered Paramedic",
      "CS50: Introduction to Computer Science",
    ],
  );
  assert.deepEqual(
    [...technicalSource.matchAll(/^ {8}title: "([^"]+)"/gm)].map(([, title]) => title),
    [
      "Healthcare simulation and immersive learning",
      "Paramedic and emergency care",
      "Higher education and neuroinclusion",
      "Software, responsible AI and cybersecurity",
    ],
  );
  assert.deepEqual(
    [...contributionsSource.matchAll(/^ {8}title: "([^"]+)"/gm)].map(([, title]) => title),
    [
      "Responsible AI in professional education",
      "Palliative and end-of-life care",
      "Academic peer review",
      "Neurodivergent staff advocacy",
      "Fellowship mentoring and assessment",
      "Scholarship and professional speaking",
    ],
  );
});

test("all primary navigation routes have page implementations", async () => {
  for (const route of [
    "page.tsx",
    "about/page.tsx",
    "work/page.tsx",
    "blog/page.tsx",
    "contact/page.tsx",
  ]) {
    const file = new URL(`src/app/${route}`, repositoryRoot);
    const source = await readFile(file, "utf8");
    assert.ok(source.length > 0, join("src/app", route));
  }
});

test("experience grouping preserves organisation and role order without mutation", () => {
  const firstOrganisationRole = Object.freeze({
    company: "Organisation A",
    role: "Role one",
    timeframe: "2024–2025",
  });
  const otherOrganisationRole = Object.freeze({
    company: "Organisation B",
    role: "Only role",
    timeframe: "Current",
  });
  const secondOrganisationRole = Object.freeze({
    company: "Organisation A",
    role: "Role two",
    timeframe: "2025–present",
  });
  const experiences = Object.freeze([
    firstOrganisationRole,
    otherOrganisationRole,
    secondOrganisationRole,
  ]);

  const groupedExperiences = groupExperiencesByCompany(experiences);

  assert.deepEqual(groupedExperiences, [
    ["Organisation A", [firstOrganisationRole, secondOrganisationRole]],
    ["Organisation B", [otherOrganisationRole]],
  ]);
  assert.deepEqual(experiences, [
    firstOrganisationRole,
    otherOrganisationRole,
    secondOrganisationRole,
  ]);
});

test("experience keys remain unique when role metadata is duplicated", () => {
  const experience = {
    company: "Organisation A",
    role: "Repeated role",
    timeframe: "2025–present",
  };

  const [[firstKey], [secondKey]] = keyExperiences([experience, experience]);

  assert.equal(firstKey, "Organisation A-Repeated role-2025–present");
  assert.equal(secondKey, "Organisation A-Repeated role-2025–present-1");
  assert.notEqual(firstKey, secondKey);
});
