export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Sep. 2023 - Sep. 2024",
    title: "Student Software Developer",
    company: "CDH",
    description:
      "Developed accessible dashboards and forms for the UA Borderlands project, enhancing data workflows for 100+ users.",
    companyUrl: "https://digitalhumanities.arizona.edu/",
  },
  {
    date: "Jan. 2023 - Sep. 2023",
    title: "Student Production Crew Member",
    company: "AZPM",
    description:
      "Assisted in producing 20+ episodes of Hollywood at Home, contributing to interviews, on-location filming, and technical setup for high-quality broadcasts.",
    companyUrl: "https://www.azpm.org/",
  },
];
