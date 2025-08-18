import PageHeading from "@/components/shared/page-heading";
import React from "react";
import { ServicesCard } from "./components/services-card";
import { ClipboardCheck, Plane, Ship, Truck, Warehouse } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const page = () => {
  const servicesData: Service[] = [
    {
      id: "road-transport",
      title: "Road Transport",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris any nullam the as integer quam dolor nunc semper. Ornare non nulla as faucibus pulvinar vulputate neque. The as Suscipit tristique nam it enim mauris consectetur platea. Mauris any nullam the as integer quam dolor nunc semper.",
      image: "/service2.jpg",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      id: "air-freight",
      title: "Air Freight",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent habitant vitae orci volutpat nec. Nullam tempor, quam id sagittis posuere, lorem velit ullamcorper nulla, eget suscipit arcu mauris et sapien. Curabitur commodo tellus nec justo euismod, vel luctus metus eleifend.",
      image: "/service3.jpg",
      icon: <Plane className="w-6 h-6" />,
    },
    {
      id: "sea-shipping",
      title: "Sea Shipping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer vel ex ut mi dictum luctus. Aenean ornare, nisl eget tincidunt egestas, risus nisl hendrerit risus, vitae bibendum dolor nisi ac lacus. Donec dapibus, neque nec suscipit tristique, quam justo feugiat magna.",
      image: "/service4.jpg",
      icon: <Ship className="w-6 h-6" />,
    },
    {
      id: "warehousing",
      title: "Warehousing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed fringilla magna ac lorem porta, ac tincidunt magna eleifend. Pellentesque condimentum, magna a ultricies ullamcorper, velit sapien suscipit nulla, vel suscipit lacus dolor a sapien. Donec vitae erat a neque facilisis posuere.",
      image: "/service5.jpg",
      icon: <Warehouse className="w-6 h-6" />,
    },
    {
      id: "custom-clearance",
      title: "Custom Clearance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus facilisis leo in enim sodales, et lacinia metus tempor. Mauris eu magna ac mi malesuada varius. Nulla facilisi. Quisque nec sapien eget justo eleifend cursus et nec lacus.",
      image: "/service3.jpg",
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-gray-50">
      <PageHeading
        title="Services"
        breadcrumb={["Home", "Services"]}
        backgroundImage="/hero-section-bg.png"
      />
      <div className="px-8 md:px-32 py-12 md:py-24">
        <ServicesCard servicesData={servicesData} />
      </div>
    </section>
  );
};

export default page;
