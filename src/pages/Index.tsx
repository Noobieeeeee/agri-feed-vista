
import { useState } from "react";
import Header from "@/components/Header";
import NewsFeed from "@/components/NewsFeed";
import ResearchFeed from "@/components/ResearchFeed";
import Footer from "@/components/Footer";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("news");
  const { toast } = useToast();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    toast({
      title: value === "news" ? "Philippine News Feed" : "Research Feed",
      description: `Viewing latest ${value === "news" ? "Philippine agricultural news" : "agricultural engineering research"}`,
      duration: 1500,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="flex-grow">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsContent value="news" className="mt-0">
            <NewsFeed />
          </TabsContent>
          <TabsContent value="research" className="mt-0">
            <ResearchFeed />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
