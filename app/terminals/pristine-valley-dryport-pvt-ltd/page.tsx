import PageHeading from "@/components/shared/page-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function AnnapurnaTerminal() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeading
        title="Terminals"
        breadcrumb={["Home", "Terminals", "PRISTINE VALLEY DRYPORT PVT.LTD"]}
        backgroundImage="/hero-section-bg.png"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 px-4 md:py-20 md:px-20">
        {/* Left Sidebar - Contact Card */}
        <div className="lg:col-span-1">
          <Card className="bg-white shadow-sm border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                PRISTINE VALLEY DRYPORT PVT.LTD
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Diam vitae facilisis quis rhoncus ultrices vitae, viverra
                habitasse varius Aliquam sapien
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email:</p>
                    <p className="font-medium text-gray-900">
                      branch@company.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone:</p>
                    <p className="font-medium text-gray-900">+977 9804023691</p>
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
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris
                  arcu nullam the as integer quam dolor nunc that semper. Ornare
                  non nulla as faucibus pulvinar vulputate neque. The as
                  Suscipit tristique nam it enim mauris arcu consectetur platea.
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris
                  arcu nullam the as integer at quam dolor nunc semper. Ornare
                  non nulla as faucibus pulvinar vulputate neque.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  The as Suscipit tristique nam it enim mauris consectetur
                  platea.Lorem ipsum dolor sit amet consectetur that adipiscing
                  elit. Mauris arcu nullam the as integer quam dolor nunc
                  semper. Ornare non nulla as faucibus pulvinar vulputate neque.
                  The as Suscipit tristique nam it enim mauris consectetur
                  platea.
                </p>

                {/* Bullet Points */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Lorem ipsum dolor consectetur the nunc semper pulvinar
                      vulputate neque.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Dolor consectetur the nunc pulvinar vulputate neque.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Consectetur the nunc semper pulvinar vulputate neque.
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mt-8">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris
                  arcu nullam the as integer quam dolor nunc that semper. Ornare
                  non nulla as faucibus pulvinar vulputate neque. The as
                  Suscipit tristique nam it enim mauris arcu consectetur platea.
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
