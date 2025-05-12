
import { useState } from "react";
import Header from "@/components/Header";
import NewsFeed from "@/components/NewsFeed";
import ResearchFeed from "@/components/ResearchFeed";
import Footer from "@/components/Footer";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Book, ExternalLink } from "lucide-react";
import InfoDialog from "@/components/InfoDialog";
import { agriEngineeringInfo } from "@/services/agriEngineeringInfo";

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("news");
  const [showIntro, setShowIntro] = useState<boolean>(false);
  const [selectedInfoId, setSelectedInfoId] = useState<string | null>(null);
  const { toast } = useToast();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    toast({
      title: value === "news" ? "Philippine News Feed" : "Research Feed",
      description: `Viewing latest ${value === "news" ? "Philippine agricultural news" : "agricultural engineering research"}`,
      duration: 1500,
    });
  };

  const handleLearnMore = (id: string) => {
    setSelectedInfoId(id);
  };

  const selectedInfo = selectedInfoId 
    ? agriEngineeringInfo.find(info => info.id === selectedInfoId) || null
    : null;

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
        <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
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
            
            <div className="space-y-6">
              <section>
                <h3 className="font-medium text-primary mt-4 text-lg">Key Legislation:</h3>
                <div className="mt-2 space-y-3">
                  <div className="border rounded-md p-4 bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-semibold">Republic Act No. 3927 (1964)</h4>
                      <p className="text-sm text-gray-600">The original Philippine Agricultural Engineering Law</p>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="self-start sm:self-center whitespace-nowrap border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => handleLearnMore("ra-3927")}
                    >
                      Learn More
                    </Button>
                  </div>
                  
                  <div className="border rounded-md p-4 bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-semibold">Republic Act No. 8559 (1998)</h4>
                      <p className="text-sm text-gray-600">The New Philippine Agricultural Engineering Act</p>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="self-start sm:self-center whitespace-nowrap border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => handleLearnMore("ra-8559")}
                    >
                      Learn More
                    </Button>
                  </div>
                  
                  <div className="border rounded-md p-4 bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-semibold">Republic Act No. 10915 (2016)</h4>
                      <p className="text-sm text-gray-600">The Philippine Agricultural and Biosystems Engineering Act</p>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="self-start sm:self-center whitespace-nowrap border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => handleLearnMore("ra-10915")}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </section>
              
              <section>
                <h3 className="font-medium text-primary mt-4 text-lg">Key Institutions:</h3>
                <div className="mt-2 space-y-3">
                  <div className="border rounded-md p-4 bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-semibold">Philippine Society of Agricultural Engineers (PSAE)</h4>
                      <p className="text-sm text-gray-600">Professional organization for agricultural engineers</p>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="self-start sm:self-center whitespace-nowrap border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => handleLearnMore("psae")}
                    >
                      Learn More
                    </Button>
                  </div>
                  
                  <div className="border rounded-md p-4 bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-semibold">Agricultural Machinery Testing and Evaluation Center (AMTEC)</h4>
                      <p className="text-sm text-gray-600">Testing facility for agricultural machinery at UPLB</p>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="self-start sm:self-center whitespace-nowrap border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => handleLearnMore("amtec")}
                    >
                      Learn More
                    </Button>
                  </div>
                  
                  <div className="border rounded-md p-4 bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-semibold">Agricultural Engineering Board - PRC</h4>
                      <p className="text-sm text-gray-600">Regulatory body for agricultural engineering practice</p>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="self-start sm:self-center whitespace-nowrap border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => handleLearnMore("engineering-board")}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </section>
            </div>
            
            <p className="text-sm mt-6 text-gray-600">
              Agricultural and Biosystems Engineering in the Philippines continues to evolve, addressing challenges in food security, mechanization, and environmental sustainability through innovative engineering solutions.
            </p>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={() => setShowIntro(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <InfoDialog
        info={selectedInfo}
        isOpen={!!selectedInfo}
        onClose={() => setSelectedInfoId(null)}
      />
    </div>
  );
};

export default Index;
