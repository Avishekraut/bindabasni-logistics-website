import PageHeading from "@/components/shared/page-heading";
import { Gallery } from "./components/gallery";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageHeading
        title="Gallery"
        breadcrumb={["Home", "Gallery"]}
        backgroundImage="/hero-section-bg.png"
      />
      <div className="flex flex-col gap-12 text-center py-24 px-6 md:px-36">
        <Gallery />
      </div>
    </main>
  );
}
