import { Skills } from "@/data/skills";

export function SkillsEntry({ skills }: { skills: Skills }) {
  return (
    <div className="space-y-6">
      {skills.programmingLanguages && (
        <SkillSection title="Programming Languages" items={skills.programmingLanguages} />
      )}

      {skills.framerworks && (
        <SkillSection title="Frameworks" items={skills.framerworks} />
      )}

      {skills.tools && (
        <SkillSection title="Tools" items={skills.tools} />
      )}

      {skills.dataTools && (
        <SkillSection title="Data Tools" items={skills.dataTools} />
      )}

      {skills.languages && (
        <SkillSection title="Languages" items={skills.languages} />
      )}

      {skills.other && (
        <SkillSection title="Other" items={skills.other} />
      )}
    </div>
  );
}

function SkillSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-2">
      {/* Section title */}
      <h3 className="font-serif text-zinc-700 ">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="
              font-serif text-xs text-zinc-450 tracking-wide 
              bg-neutral-200          /* lighter gray background */
              text-neutral-900         /* dark text */
              border border-neutral-300 /* light border */
              rounded-lg
              px-3 py-1
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
