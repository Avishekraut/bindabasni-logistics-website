import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedButton } from "@/components/shared/animated-button";

export default function ContactForm() {
  return (
    <div className="w-full py-12 md:py-18 bg-gray-50 px-6 md:px-38 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section: Contact Information */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold leading-tight text-gray-800">
            Get in touch with us
          </h1>
          <p className="text-gray-800 text-base leading-relaxed">
            Ready to streamline your shipping operations? Contact us today to
            discuss your needs and discover how Nicholas Shipping Services can
            elevate your cargo transportation experience.
          </p>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary border border-white/20 flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-800">014984326</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary border  flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-800">bindabasinilogistic@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary border border-white/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-800">
                  Nayabazaar Balaju, Valley Cold Store Complex
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="md:mt-4 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              type="text"
              placeholder="Your name*"
              className="bg-gray-50 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:ring-offset-0 focus:ring-0"
            />
            <Input
              type="email"
              placeholder="Email*"
              className="bg-gray-50 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:ring-offset-0 focus:ring-0"
            />
            <Input
              type="tel"
              placeholder="Phone Number*"
              className="bg-gray-50 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:ring-offset-0 focus:ring-0"
            />
            <Input
              type="text"
              placeholder="City*"
              className="bg-gray-50 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:ring-offset-0 focus:ring-0"
            />
          </div>
          <Textarea
            placeholder="Your Message"
            rows={8}
            className="bg-gray-50 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:ring-offset-0 focus:ring-0 resize-none h-40"
          />
          <AnimatedButton label="Submit Message" />
        </div>
      </div>
    </div>
  );
}
