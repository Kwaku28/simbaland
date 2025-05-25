import { simbaDen, simbaEdge, simbaVerse } from "@/data/ecosystem";
import { cn } from "@/lib/utils";

export function SimbaEdgeSection() {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  relative z-10 py-10 max-w-7xl mx-auto">
      {simbaEdge.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

export function SimbaVerseSection() {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  relative z-10 py-10 max-w-7xl mx-auto">
      {simbaVerse.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}
export function SimbaDenSection() {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  relative z-10 py-10 max-w-7xl mx-auto">
      {simbaDen.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-300">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100 2xl:text-3xl">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-full 2xl:text-2xl relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
