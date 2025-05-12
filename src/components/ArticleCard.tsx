
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
  
  // Truncate description if too long
  const truncatedDescription = description.length > 200
    ? `${description.substring(0, 200)}...`
    : description;

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
        <p className="text-sm text-gray-600 mb-2">{truncatedDescription}</p>
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
