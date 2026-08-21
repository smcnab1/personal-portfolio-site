type CompanyExperience = {
  company: string;
};

type KeyedExperience = CompanyExperience & {
  role: string;
  timeframe: string;
};

export type ExperienceGroup<Experience extends CompanyExperience> = [
  company: string,
  roles: Experience[],
];

export function groupExperiencesByCompany<Experience extends CompanyExperience>(
  experiences: readonly Experience[],
): Array<ExperienceGroup<Experience>> {
  return Array.from(
    experiences.reduce<Map<string, Experience[]>>((groups, experience) => {
      const roles = groups.get(experience.company);

      if (roles) {
        roles.push(experience);
      } else {
        groups.set(experience.company, [experience]);
      }

      return groups;
    }, new Map()),
  );
}

export function keyExperiences<Experience extends KeyedExperience>(
  experiences: readonly Experience[],
): Array<[key: string, experience: Experience]> {
  const occurrences = new Map<string, number>();

  return experiences.map((experience) => {
    const stableKey = `${experience.company}-${experience.role}-${experience.timeframe}`;
    const occurrence = occurrences.get(stableKey) ?? 0;
    occurrences.set(stableKey, occurrence + 1);

    // Identical static entries have no independent identifier, so suffix later occurrences.
    const key = occurrence === 0 ? stableKey : `${stableKey}-${occurrence}`;
    return [key, experience];
  });
}
