
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchResearch } from "@/services/rssService";
import { Skeleton } from "@/components/ui/skeleton";

interface Article {
  id: string;
  title: string;
  link: string;
  description: string;
  source: string;
  pubDate: string;
}

const ResearchFeed = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadResearch = async () => {
      try {
        setLoading(true);
        const researchArticles = await fetchResearch();
        setArticles(researchArticles);
        setError(null);
      } catch (err) {
        console.error("Failed to load research:", err);
        setError("Failed to load research articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadResearch();
  }, []);

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">{error}</p>
        <p className="text-sm text-gray-600">
          We're having trouble accessing our research sources. Please try again soon.
        </p>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-xl font-bold mb-6 text-secondary">Latest Agricultural Engineering Research</h2>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={`skeleton-${i}`} className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-full rounded-md" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          ))}
        </div>
      ) : articles.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No research articles found at the moment. Please check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              source={article.source}
              link={article.link}
              pubDate={article.pubDate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResearchFeed;
