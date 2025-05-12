
import { useState } from "react";
import Header from "@/components/Header";
import NewsFeed from "@/components/NewsFeed";
import ResearchFeed from "@/components/ResearchFeed";
import Footer from "@/components/Footer";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Book } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("news");
  const [showIntro, setShowIntro] = useState<boolean>(false);
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
        <div className="container max-w-6xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold text-secondary">
              Philippine Agricultural & Biosystems Engineering
            </h1>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 border-secondary text-secondary hover:bg-secondary hover:text-white"
              onClick={() => setShowIntro(true)}
            >
              <Book size={16} />
              About the Profession
            </Button>
          </div>
        </div>

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

      <Dialog open={showIntro} onOpenChange={setShowIntro}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-secondary">
              About Agricultural & Biosystems Engineering in the Philippines
            </DialogTitle>
            <DialogDescription>
              A profession regulated by RA 10915 (Philippine Agricultural and Biosystems Engineering Act of 2016)
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <p className="mb-3 text-sm">
              Agricultural and Biosystems Engineering in the Philippines is a regulated profession that applies engineering principles to address challenges in agriculture, food production, and environmental management.
            </p>
            
            <h3 className="font-medium text-primary mt-4">Key Legislation:</h3>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li className="text-sm">Republic Act No. 3927 (1964) - The original Philippine Agricultural Engineering Law</li>
              <li className="text-sm">Republic Act No. 8559 (1998) - The New Philippine Agricultural Engineering Act</li>
              <li className="text-sm">Republic Act No. 10915 (2016) - The Philippine Agricultural and Biosystems Engineering Act</li>
            </ul>
            
            <h3 className="font-medium text-primary mt-4">Key Institutions:</h3>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li className="text-sm">Philippine Society of Agricultural Engineers (PSAE) - Professional organization for agricultural engineers</li>
              <li className="text-sm">Agricultural Machinery Testing and Evaluation Center (AMTEC) - Testing facility for agricultural machinery</li>
              <li className="text-sm">Professional Regulation Commission (PRC) - Regulatory body for licensed professional engineers</li>
            </ul>
            
            <p className="text-sm mt-4">
              Use the "Learn More" button on any article card to access detailed information about laws, organizations, and programs related to Agricultural and Biosystems Engineering in the Philippines.
            </p>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={() => setShowIntro(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
