export interface Skills {
    programmingLanguages?: string[];
    framerworks?: string[];
    tools?: string[];
    dataTools?: string[];
    languages?: string[];
    other?: string[];
}

export const skillsData: Skills[] = [
  // Example entry
  {
    programmingLanguages: ["Java", "Python", "C", "JavaScript/TypeScript", "Matlab", "OCaml", "C#"],
    framerworks: ["React.js", "React Native", "Node.js", "Express.js", "Next.js", "JUnit", "Swing", "JavaFX"],
    tools: ["Git", "Docker", "MongoDB", "AWS", "Digital Ocean", "Unity", "Blender"],
    dataTools: ["pandas", "NumPy", "Matplotlib"],
    languages: ["Uzbek (Native)", "Russian (Native)", "English (Fluent)"],
    other: ["strong analytical problem-solving", "effective collaboration", "adaptability", "rapid learning capabilities"]
  }
];
