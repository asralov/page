import { StaticImageData } from "next/image";
import my_photo from "../images/me.jpg"

export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: StaticImageData;
  institutionUrl?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar

}

export const aboutMe: AboutMe = {
  name: "Abrorjon Asralov",
  title: "B.S. in Computer Science with Minor in Artificial Intelligence",
  institution: "University of Arizona",
  // Note that links work in the description
  description:
    "A senior Computer Science student graduating in May 2026 with a strong interest in software engineering. I enjoy building projects that blend creativity and logic, especially developing games with my team. I am always exploring new tools, improving my technical skills, and working on software that feels meaningful and well-designed.",
  email: "asralov@arizona.edu",
  imageUrl: my_photo,
  githubUsername: "asralov",
  linkedinUsername: "abrorjon-asralov",
  institutionUrl: "https://www.arizona.edu/",
};
