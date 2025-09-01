"use client";
import React from "react";
import PageHeading from "@/components/shared/page-heading";
import ContactForm from "../(home)/contact-form";
const Contact = () => {
  return (
    <section className="bg-gray-50">
      <PageHeading
        title="Contact Us"
        breadcrumb={["Home", "Contact"]}
        backgroundImage="/hero-section-bg.png"
      />
      <div className="px-6 md:px-16">
        <ContactForm />
      </div>
      <div className="px-6 md:px-0 md:max-w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.439453146231!2d85.30354504847384!3d27.72464122463928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1945b7f099c9%3A0x3ed9247c5c15a94f!2sBindabasini%20Logistics%20Pvt.Ltd.!5e0!3m2!1sen!2snp!4v1755590786914!5m2!1sen!2snp"
          loading="lazy"
          className="w-full h-[560px]"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
