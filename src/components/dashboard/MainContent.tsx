import { Tabs } from "@/components/ui/tabs";
import ProfileHeader from "./ProfileHeader";
import AnalyticsDashboard from "./AnalyticsDashboard";
import PropertyFeed from "./PropertyFeed";

export default function MainContent() {
  return (
    <Tabs defaultValue="analytics" className="flex flex-col">
      {/* Both components now share the same Tabs state */}
      <ProfileHeader /> 
      <AnalyticsDashboard />
      
      <section className="mt-8">
        <PropertyFeed />
           <PropertyFeed />
      </section>
    </Tabs>
  );
}