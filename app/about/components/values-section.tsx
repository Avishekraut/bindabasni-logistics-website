import {
  Crown,
  ShieldCheck,
  Users,
  Lightbulb,
  Flag,
  Globe,
} from "lucide-react";

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="text-primary mb-4">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function ValuesSection() {
  const values = [
    {
      icon: Crown,
      title: "Quality",
      description:
        "Lorem ipsum dolor sit amet lorem consectetur adipiscing elit est vel semper nam porta arcu.",
    },
    {
      icon: ShieldCheck,
      title: "Commitment",
      description:
        "Lorem ipsum dolor sit amet lorem consectetur adipiscing elit est vel semper nam porta arcu.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Lorem ipsum dolor sit amet lorem consectetur adipiscing elit est vel semper nam porta arcu.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Lorem ipsum dolor sit amet lorem consectetur adipiscing elit est vel semper nam porta arcu.",
    },
    {
      icon: Flag,
      title: "Leadership",
      description:
        "Lorem ipsum dolor sit amet lorem consectetur adipiscing elit est vel semper nam porta arcu.",
    },
    {
      icon: Globe,
      title: "Openness",
      description:
        "Lorem ipsum dolor sit amet lorem consectetur adipiscing elit est vel semper nam porta arcu.",
    },
  ];

  return (
    <section className="bg-neutral-50 py-16">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
          <div>
            <h2 className="text-base font-semibold tracking-wide uppercase text-primary">
              Our Values
            </h2>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              The values that drive <br className="hidden sm:inline" />
              everything we do.
            </h2>
          </div>
          <div className="lg:flex lg:justify-end lg:items-start">
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tellus sem
              pellentesque ac nulla tortor nulla non cursus hendrerit urna
              tristique et tristique.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
