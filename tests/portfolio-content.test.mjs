import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

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
