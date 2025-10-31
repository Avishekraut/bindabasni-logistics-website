import PageHeading from "@/components/shared/page-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function AnnapurnaTerminal() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeading
        title="Terminals"
        breadcrumb={["Home", "Terminals", "Annapurna Terminals Pvt. Ltd"]}
        backgroundImage="/hero-section-bg.png"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 px-6 md:py-20 md:px-18">
        {/* Left Sidebar - Contact Card */}
        <div className="lg:col-span-1">
          <Card className="bg-white shadow-sm border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                ANNAPURNA TERMINALS PVT.LTD
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email:</p>
                    <p className="font-medium text-gray-900">
                      bindabasinilogistic@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone:</p>
                    <p className="font-medium text-gray-900">014984326</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address:</p>
                    <p className="font-medium text-gray-900">
                      Inland Clearence Deport,
                      <br />
                      Bhairahawa
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-96">
              <Image
                src="/service2.jpg"
                alt="Annapurna Terminal"
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  The Bhairahawa Dry Port, also known as the Siddharthanagar
                  Inland Clearance Depot, serves as a vital gateway for
                  Nepal&apos;s international trade. Strategically located near
                  the Sunauli border with India, it provides seamless import and
                  export services for businesses across western Nepal. Managed
                  by Annapurna Terminals Pvt. Ltd., the port ensures efficient
                  handling and secure storage of cargo to support the
                  region&apos;s growing trade demands.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Equipped with modern infrastructure, the terminal is designed
                  to streamline logistics operations. From container management
                  to cargo verification, every facility is optimized for speed,
                  reliability, and safety, helping businesses reduce transit
                  times and operational costs.
                </p>

                {/* Bullet Points */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Warehouses:</strong> Secure storage facilities for
                      goods of all sizes, ensuring protection and easy
                      accessibility.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Container Yards:</strong> Organized spaces for
                      efficient loading, unloading, and management of cargo
                      containers.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Weighbridges:</strong> Advanced weighing systems
                      to verify cargo weight, ensuring compliance and accuracy
                      in trade documentation.
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mt-8">
                  By combining strategic location, modern infrastructure, and
                  professional management, Bhairahawa Dry Port is committed to
                  facilitating smooth trade operations and contributing to
                  Nepal’s economic growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
