
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import InfoDialog from "@/components/InfoDialog";
import { findRelatedInfo, AgriEngineeringInfo } from "@/services/agriEngineeringInfo";

interface ArticleCardProps {
  title: string;
  description: string;
  source: string;
  link: string;
  pubDate?: string;
}

const ArticleCard = ({
  title,
  description,
  source,
  link,
  pubDate,
}: ArticleCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedInfo, setSelectedInfo] = useState<AgriEngineeringInfo | null>(null);
  
  // Format date if available
  const formattedDate = pubDate ? new Date(pubDate).toLocaleDateString() : "";
  
  // Create a better summary - 2-3 sentences at most
  const getSummary = (text: string): string => {
    // Remove any HTML tags first
    const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "");
    
    // Split by sentences
    const sentences = cleanText.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    // Get first 2-3 sentences
    const summary = sentences.slice(0, Math.min(2, sentences.length)).join(". ");
    
    return summary.length > 0 ? `${summary}.` : "No description available.";
  };

  const summaryText = getSummary(description);

  const handleLearnMore = () => {
    // Find related information based on the title
    const relatedInfoList = findRelatedInfo(title);
    
    if (relatedInfoList.length > 0) {
      setSelectedInfo(relatedInfoList[0]); // Take the most relevant match
    } else {
      // If no direct match, search by keywords
      const keywords = ["agricultural", "biosystems", "engineering", "Philippines", "PSAE", "AMTEC"];
      
      for (const keyword of keywords) {
        if (title.toLowerCase().includes(keyword.toLowerCase())) {
          const keywordResults = findRelatedInfo(keyword);
          if (keywordResults.length > 0) {
            setSelectedInfo(keywordResults[0]);
            break;
          }
        }
      }
      
      // If still no match, default to PSAE info
      if (!selectedInfo) {
        setSelectedInfo(findRelatedInfo("PSAE")[0]);
      }
    }
    
    setIsDialogOpen(true);
  };

  return (
    <>
      <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-200">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg font-semibold text-secondary">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-gray-600 mb-4">{summaryText}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start pt-2 border-t">
          <div className="flex items-center justify-between w-full mb-2">
            <span className="text-xs font-medium text-primary">{source}</span>
            {formattedDate && <span className="text-xs text-gray-500">{formattedDate}</span>}
          </div>
          <div className="flex w-full gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-white flex items-center justify-center gap-1"
              onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
            >
              Read Full Article
              <ExternalLink size={14} />
            </Button>
            <Button
              variant="default"
              size="sm"
              className="flex-1 bg-secondary text-white hover:bg-secondary/80"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
          </div>
        </CardFooter>
      </Card>
      
      <InfoDialog
        info={selectedInfo}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default ArticleCard;
