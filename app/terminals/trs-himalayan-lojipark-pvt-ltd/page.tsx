import PageHeading from "@/components/shared/page-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function AnnapurnaTerminal() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeading
        title="Terminals"
        breadcrumb={["Home", "Terminals", "TRS HIMALAYAN LOJIPARK PVT.LTD"]}
        backgroundImage="/hero-section-bg.png"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-20 px-20">
        {/* Left Sidebar - Contact Card */}
        <div className="lg:col-span-1">
          <Card className="bg-white shadow-sm border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                TRS HIMALAYAN LOJIPARK PVT.LTD
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
                src="/terminal-birgunj.JPG"
                alt="TRS Himalayan Loji Park Terminal"
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  TRS Himalayan Logipark Pvt. Ltd., a joint venture between
                  Bindabasini Logistics Pvt. Ltd. of Nepal, TRS Lift and Shift
                  Services Pvt. Ltd., and Apeejay Shipping Ltd. of India, has
                  been entrusted with the operation and management of the
                  Birgunj Integrated Check Post (ICP). The company secured the
                  highest score in the evaluation process, demonstrating its
                  capability to handle this critical cross-border trade hub.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  On March 20, an official five-year agreement was signed by
                  Madhav Prasad Baral, representing TRS Himalayan Logipark Pvt.
                  Ltd., and Harekrishna Mishra, Deputy Director of the Nepal
                  Intermodal Transport Development Board (NITDB). The ceremony
                  was attended by NITDB Executive Director Ashish Gajurel, board
                  employees, and company representatives, marking the beginning
                  of a public-private partnership aimed at strengthening Nepal’s
                  trade infrastructure.
                </p>

                {/* Bullet Points */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Five-Year Lease Agreement:</strong> TRS Himalayan
                      Logipark will operate and manage the Birgunj ICP for five
                      years under NITDB’s regulatory oversight.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Investment Commitment:</strong> The company will
                      pay a minimum lease recovery of approximately Rs. 1.81
                      billion over the contract period.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Performance-Based Payments:</strong> Additional
                      fees will be paid if vehicle traffic exceeds projections,
                      ensuring fair revenue sharing.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Competitive Selection:</strong> TRS Himalayan
                      Logipark was chosen through an international bidding
                      process among five qualified contenders.
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mt-8">
                  By leveraging private sector efficiency and investment, the
                  operation of the Birgunj ICP under TRS Himalayan Logipark Pvt.
                  Ltd. is expected to enhance cross-border trade, reduce costs,
                  and bring greater agility to Nepal’s logistics ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
