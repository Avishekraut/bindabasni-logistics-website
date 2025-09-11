import {
  Crown,
  ShieldCheck,
  Users,
  Lightbulb,
  Handshake,
  Sprout,
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
      title: "Reliability",
      description:
        "We keep our promises. Every delivery is handled with care so your goods arrive safely and on time.",
    },
    {
      icon: ShieldCheck,
      title: "Commitment",
      description:
        " We give our best to every job, big or small, because your success is our success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace smarter and simpler solutions that make logistics faster, easier, and more efficient.",
    },
    {
      icon: Users,
      title: "Integrity",
      description:
        "We believe in honesty and transparency, so you always know you can rely on us.",
    },
    {
      icon: Handshake,
      title: "Collaboration ",
      description:
        "We achieve the best results by working together, listening closely, and building trust.",
    },
    {
      icon: Sprout,
      title: "Growth",
      description:
        "We grow with our clients, creating lasting improvements and value year after year.",
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
              Our values are at the heart of everything we do. They are the
              guiding principles that shape how we work with our clients,
              partners, and team every single day.
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
