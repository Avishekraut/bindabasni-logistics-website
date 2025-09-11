import PageHeading from "@/components/shared/page-heading";
import React from "react";
import { ServicesCard } from "./components/services-card";
import {
  Boxes,
  Building2,
  ClipboardCheck,
  Home,
  Package,
  Plane,
  Ruler,
  Ship,
  ShoppingBag,
  Truck,
} from "lucide-react";

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
      id: "ocean-freight",
      title: "Ocean Freight",
      description:
        "Our ocean freight services are handled by industry experts at Bindabasini, ensuring smooth, cost-effective, and reliable sea transport solutions. Whether it’s import or export, we manage your shipments with care, delivering across major global ports while maintaining transparency, safety, and timely service throughout the logistics process.",
      image: "/service4.jpg",
      icon: <Ship className="w-6 h-6" />,
    },
    {
      id: "road-transport",
      title: "Road Transportation",
      description:
        "We provide efficient road transportation via Tatopani and Kerung routes, ensuring your goods reach their destination safely and on time. With strong route networks and experienced drivers, we manage all road logistics, making it a reliable solution for moving commercial goods across Nepal and neighboring regions seamlessly.",
      image: "/service2.jpg",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      id: "air-cargo",
      title: "Air Cargo Handling",
      description:
        "Fast, secure, and efficient handling of import and export shipments via air freight. Our dedicated air cargo services are designed to manage time-sensitive consignments, ensuring quick customs clearance, reliable tracking, and safe delivery. Perfect for businesses seeking speed and flexibility in global or regional trade logistics operations.",
      image: "/service3.jpg",
      icon: <Plane className="w-6 h-6" />,
    },
    {
      id: "trailer-transport",
      title: "Trailer Transport Service",
      description:
        "We offer specialized trailer transport services with direct container delivery for large or heavy consignments. Our modern trailers are equipped for safe handling, making it ideal for industries needing secure container movement. This service ensures smooth logistics, minimizing risks and delays during long-distance overland cargo transportation processes.",
      image: "/service5.jpg",
      icon: <Package className="w-6 h-6" />,
    },
    {
      id: "bulk-cargo",
      title: "Bulk Cargo Handling",
      description:
        "Our bulk cargo handling service efficiently manages rail and road cargo shipments from India to Nepal. Designed for businesses dealing with heavy or large quantities, we ensure cost-effective, secure, and timely delivery of goods, supported by experienced handlers and a streamlined logistics process for uninterrupted operations.",
      image: "/service4.jpg",
      icon: <Boxes className="w-6 h-6" />,
    },
    {
      id: "over-dimension-cargo",
      title: "Over Dimension Cargo Handling",
      description:
        "We specialize in handling oversized and heavy goods that require expert planning and equipment. From machinery to industrial equipment, our team ensures proper route planning, permits, and safe transport. This service is ideal for industries managing complex cargo with unique size or weight requirements across Nepal and beyond.",
      image: "/service2.jpg",
      icon: <Ruler className="w-6 h-6" />,
    },
    {
      id: "custom-clearance",
      title: "Custom Clearance",
      description:
        "Our custom clearance services simplify international trade by managing documentation, permits, and compliance at major entry points including Kolkata, Vizag, and Nepal’s borders. We reduce delays and ensure your shipments move smoothly through customs, giving you complete peace of mind while dealing with import and export logistics.",
      image: "/service3.jpg",
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
    {
      id: "door-to-door",
      title: "Door-to-Door Container Delivery",
      description:
        "We provide hassle-free door-to-door container delivery services, ensuring cargo is transported directly from ports to your warehouse or factory. This complete logistics solution saves time, reduces costs, and eliminates coordination stress, giving you a seamless experience with one trusted partner managing the entire delivery process efficiently.",
      image: "/service5.jpg",
      icon: <Home className="w-6 h-6" />,
    },
    {
      id: "product-sourcing-china",
      title: "Product Sourcing from China",
      description:
        "We help you source products from trusted suppliers in China with full logistics support. From supplier coordination to secure transport and delivery in Nepal, we handle everything. This service ensures businesses can access quality Chinese goods without worrying about shipping complexities, delays, or compliance with trade regulations.",
      image: "/service3.jpg",
      icon: <ShoppingBag className="w-6 h-6" />,
    },
    {
      id: "project-cargo",
      title: "Project Cargo Handling",
      description:
        "Our project cargo handling is tailored for large-scale infrastructure or industrial needs. We manage complex logistics, including heavy machinery, oversized equipment, and specialized cargo. With careful planning, safety measures, and efficient execution, we ensure your project cargo arrives securely, supporting timely completion of critical business operations.",
      image: "/service4.jpg",
      icon: <Building2 className="w-6 h-6" />,
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
