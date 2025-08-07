import React from "react";
import Image from "next/image";

interface PageHeadingProps {
  title: string;
  breadcrumb: string[];
  backgroundImage: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({
  title,
  breadcrumb,
  backgroundImage,
}) => {
  return (
    <section className="relative h-[350px] flex items-center justify-center">
      <Image
        src={backgroundImage}
        alt={`${title} Background`}
        fill
        className="object-cover z-0"
        priority
      />
      <div className="relative z-20 text-center text-white">
        <div className="mb-2 text-lg">
          {breadcrumb.map((item, idx) => (
            <span
              key={item}
              className={
                idx === breadcrumb.length - 1 ? "font-semibold" : undefined
              }
            >
              {item}
              {idx < breadcrumb.length - 1 && <span className="mx-2">/</span>}
            </span>
          ))}
        </div>
        <h1 className="text-5xl font-bold">{title}</h1>
      </div>
    </section>
  );
};

export default PageHeading;
