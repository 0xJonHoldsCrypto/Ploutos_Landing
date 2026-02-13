import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Stats />
      <Features />
      {/* Additional sections like Markets or FAQ could be added here */}
    </div>
  );
}
