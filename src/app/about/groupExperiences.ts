type CompanyExperience = {
  company: string;
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
