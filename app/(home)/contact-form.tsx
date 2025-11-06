"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedButton } from "@/components/shared/animated-button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  city: z.string().min(1, "City is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setStatusMessage(null); // reset previous message
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatusMessage({
          type: "success",
          text: "Thank you! Your inquiry has been received, and our team will contact you shortly.",
        });
        reset();
      } else {
        setStatusMessage({
          type: "error",
          text: "Failed to send message. Please try again.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatusMessage({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="w-full py-12 md:py-18 bg-gray-50 px-6 md:px-38">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold leading-tight text-gray-800">
            Get in touch with us
          </h1>
          <p className="text-gray-800 text-base leading-relaxed">
            Ready to streamline your shipping operations? Contact us today to
            discuss your needs.
          </p>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary border border-white/20 flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <Link className="text-gray-800" href="tel:014984326">
                014984326
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary border  flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <Link
                  className="text-gray-800"
                  href="mailto:bindabasinilogistic@gmail.com"
                >
                  bindabasinilogistic@gmail.com
                </Link>
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

        {/* Right Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="md:mt-4 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Input {...register("name")} placeholder="Your name*" />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Input {...register("email")} type="email" placeholder="Email*" />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Input
                {...register("phone")}
                type="tel"
                placeholder="Phone Number*"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <Input {...register("city")} placeholder="City*" />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>
          </div>
          <div>
            <Textarea
              {...register("message")}
              placeholder="Your Message"
              rows={8}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <AnimatedButton
            label="Submit Message"
            type="submit"
            disabled={isSubmitting}
          />

          {/* Status message */}
          {statusMessage && (
            <p
              className={`mt-1 font-medium ${
                statusMessage.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {statusMessage.text}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
