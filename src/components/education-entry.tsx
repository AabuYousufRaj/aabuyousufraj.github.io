import Image from "next/image";
import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div className="grid grid-cols-4 gap-x-4 mb-2">
      <span className="text-xs text-zinc-500 mt-1">{education.year}</span>

      <div className="col-span-3 flex gap-5 items-start">
        {education.logo && (
          <div className="relative w-20 h-20 flex-shrink-0 mt-1">
            <Image
              src={education.logo}
              alt={`${education.institution} logo`}
              fill
              className="object-contain rounded-md"
            />
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-base mb-3 font-serif">{education.institution}</h3>

          <div className="space-y-4">
            {education.programs.map((program, index) => (
              <div key={index}>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  {program.degree}
                </p>

                {program.cgpa && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-1">
                    {program.cgpa}
                  </p>
                )}

                {program.description && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-1">
                    {program.description}
                  </p>
                )}

                {program.notableCourses && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
                    {program.notableCourses}
                  </p>
                )}

                {program.honors && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
                    {program.honors}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
