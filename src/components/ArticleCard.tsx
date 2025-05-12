
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
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
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full flex items-center justify-center gap-1 border-primary text-primary hover:bg-primary hover:text-white"
          onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        >
          Read Full Article
          <ExternalLink size={14} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
