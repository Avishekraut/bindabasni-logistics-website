import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, ABC Company",
      review:
        "Lorem ipsum sit amet, consectetur. At sed molestie urna urna. Magna suscipit vel diam urna amet, bibendum. Lorem ipsum sit amet, consectetur. At sed molestie urna urna. Magna suscipit vel diam urna amet, bibendum.",
    },
    {
      name: "David Parker",
      position: "CTO, XYZ Company",
      review:
        "Lorem ipsum sit amet, consectetur. At sed molestie urna urna. Magna suscipit vel diam urna amet bibendum. Lorem ipsum sit amet, consectetur. At sed molestie urna urna. Magna suscipit vel diam urna amet bibendum.",
    },
    {
      name: "Lisa Smith",
      position: "CFO, DEF Company",
      review:
        "Lorem ipsum sit amet, consectetur. At sed molestie urna urna. Magna suscipit vel diam urna amet bibendum. Lorem ipsum sit amet, consectetur. At sed molestie urna urna. Magna suscipit vel diam urna amet bibendum.",
    },
  ];

  const StarRating = () => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
  );

  return (
    <div className="w-full py-12 bg-gray-50 px-6 md:px-38">
      <div className="text-center mb-12 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gray-500 text-sm font-medium tracking-wide uppercase mb-2">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2 mt-2 md:mt-4">
            The Proof of 
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary">
          Our Moving Excellence
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            {/* Profile Image Placeholder */}
            <div className="w-12 h-12 bg-gray-300 rounded mb-4"></div>

            {/* Star Rating */}
            <StarRating />

            {/* Review Text */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {testimonial.review}
            </p>

            {/* Customer Name */}
            <p className="text-primary text-sm font-medium">
              {testimonial.name}
            </p>
            <p className="text-primary text-xs mt-1">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
