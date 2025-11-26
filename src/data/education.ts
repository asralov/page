export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "Aug. 2022 - Present",
    institution: "University of Arizona",
    degree: "B.S. in Computer Science && Artificial Intelligence Minor",
  }
];
