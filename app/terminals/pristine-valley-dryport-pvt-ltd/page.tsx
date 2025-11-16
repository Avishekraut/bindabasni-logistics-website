import ImageGallery from "@/components/shared/image-gallery";
import PageHeading from "@/components/shared/page-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const galleryPhotos = [
  {
    src: "/terminal-birgunj8.JPG",
    alt: "PRISTINE VALLEY DRYPORT",
  },
  {
    src: "/gallery/terminal-birgunj6.JPG",
    alt: "PRISTINE VALLEY DRYPORT",
  },
  {
    src: "/terminal-images/pristine/prestine3.JPG",
    alt: "PRISTINE VALLEY DRYPORT",
  },
  {
    src: "/terminal-images/pristine/prestine4.JPG",
    alt: "PRISTINE VALLEY DRYPORT",
  },
  {
    src: "/terminal-images/pristine/prestine5.JPG",
    alt: "PRISTINE VALLEY DRYPORT",
  },
  {
    src: "/terminal-images/pristine/prestine6.JPG",
    alt: "PRISTINE VALLEY DRYPORT",
  },
];

export default function AnnapurnaTerminal() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeading
        title="Terminals"
        breadcrumb={["Home", "Terminals", "PRISTINE VALLEY DRYPORT PVT.LTD"]}
        backgroundImage="/hero-section-bg.png"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 px-4 md:pt-20 md:px-20">
        {/* Left Sidebar - Contact Card */}
        <div className="lg:col-span-1">
          <Card className="bg-white shadow-sm border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                PRISTINE VALLEY DRYPORT PVT.LTD
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
                      Dryport Birgunj,
                      <br />
                      Nepal
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
                src="/terminal-images/pristine/prestine4.JPG"
                alt="Pristine Valley Dry Port"
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Pristine Valley Dryport Pvt. Ltd. is a modern logistics and
                  transportation hub dedicated to supporting Nepal’s growing
                  international trade. As an inland terminal connected to major
                  seaports through road and rail networks, it serves as a
                  critical link for consolidating, storing, and forwarding goods
                  to their final destinations with efficiency and reliability.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  By offering integrated dry port operations, freight handling,
                  and warehousing solutions, Pristine Valley Dryport ensures
                  that businesses have access to seamless supply chain services.
                  Its facilities are designed to reduce congestion at border
                  points, improve cargo flow, and provide a secure environment
                  for goods in transit.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Freight Handling:</strong> Professional cargo
                      management to ensure smooth import and export processes.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Warehousing Facilities:</strong> Secure storage
                      solutions for both short-term and long-term needs, with
                      easy accessibility.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Connectivity:</strong> Strategic links to key
                      seaports via road and rail networks, ensuring efficient
                      cargo movement.
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mt-8">
                  With its commitment to reliability, efficiency, and
                  customer-focused solutions, Pristine Valley Dryport Pvt. Ltd.
                  plays a vital role in strengthening Nepal’s trade
                  infrastructure and enabling businesses to thrive in the global
                  market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageGallery photos={galleryPhotos} title="Gallery" />
    </div>
  );
}
