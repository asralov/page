import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";

import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";

import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";

import { sectionOrder, Section } from "@/data/section-order";
import { SkillsEntry } from "@/components/skills-entry";
import { skillsData } from "@/data/skills";
import { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://asralov.dev'), // ← your custom domain
  title: 'Abrorjon Asralov | Portfolio',
  description: 'Portfolio of Abrorjon Asralov, Senior Computer Science student, showcasing web development, games, AI projects, and software engineering skills.',
  keywords: [
    'Abrorjon Asralov',
    'Portfolio',
    'Web Development',
    'Games',
    'Software Engineering',
    'AI',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript'
  ],
  authors: [{ name: 'Abrorjon Asralov' }],
  openGraph: {
    title: 'Abrorjon Asralov | Portfolio',
    description: 'Portfolio of Abrorjon Asralov, Senior Computer Science student, showcasing web development, games, AI projects, and software engineering skills.',
    url: '/portfolio', // relative to metadataBase
    siteName: 'Abrorjon Portfolio',
    images: [
      {
        url: '/preview.png', // located in public/
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}




export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                // case Section.News:
                //   return (
                //     newsData.length > 0 && (
                //       <section key={sectionName}>
                //         <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                //           News
                //         </h2>
                //         <div className="space-y-12">
                //           {newsData.map((news, index) => (
                //             <div key={index}>
                //               <NewsEntry news={news} />
                //             </div>
                //           ))}
                //         </div>
                //       </section>
                //     )
                //   );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                // case Section.Publication:
                //   return (
                //     publicationData.length > 0 && (
                //       <section key={sectionName}>
                //         <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                //           Publications
                //         </h2>
                //         <div className="space-y-12">
                //           {publicationData.map((publication, index) => (
                //             <div key={index}>
                //               <PublicationEntry publication={publication} />
                //               {index < publicationData.length - 1 && (
                //                 <div className="h-px bg-zinc-200 my-8" />
                //               )}
                //             </div>
                //           ))}
                //         </div>
                //       </section>
                //     )
                //   );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Skills:
                  return (
                    <section key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Skills
                        </h2>
                        <div className="space-y-12">
                            {skillsData.map((skills, index) => (
                            <SkillsEntry
                              key={index}
                              skills={skills}
                            />
                          ))}
                        </div>
                    </section>
                  );
                // case Section.Portfolio:
                //   return (
                //     portfolioData.length > 0 && (
                //       <section key={sectionName}>
                //         <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                //           Portfolio
                //         </h2>
                //         <div className="space-y-12">
                //           {portfolioData.map((portfolio, index) => (
                //             <PortfolioEntry key={index} portfolio={portfolio} />
                //           ))}
                //         </div>
                //       </section>
                //     )
                //   );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
      <Analytics/>
      <SpeedInsights/>
    </div>
  );
}
