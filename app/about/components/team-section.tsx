import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Kenneth Simpson",
      title: "Operations Manager",
      imageUrl: "/service2.jpg",
    },
    {
      name: "Jonathan Gibson",
      title: "Move Coordinator",
      imageUrl: "/service1.jpg",
    },
    {
      name: "Dustin Lefkowitz",
      title: "Loading and Unloading",
      imageUrl: "/service4.jpg",
    },
    {
      name: "Weston Trevino",
      title: "Drivers",
      imageUrl: "/service3.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto px-4 text-center max-w-5xl">
        <h2 className="text-base font-semibold tracking-wide uppercase text-primary">
          Our Team
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          <span className="">Our Dedicated Team:</span> Your Trusted
          <br className="hidden sm:inline" /> Partners in Logistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-full max-w-[280px] max-h-[280px] md:max-w-[220px] md:h-[220px] rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
