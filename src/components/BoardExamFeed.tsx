import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchBoardExamResults } from "@/services/rssService";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext } from "@/components/ui/pagination";

interface Article {
  id: string;
  title: string;
  link: string;
  description: string;
  source: string;
  pubDate: string;
}

const ITEMS_PER_PAGE = 6; // Number of articles to show per page

const BoardExamFeed = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    const loadBoardExams = async () => {
      try {
        setLoading(true);
        const examResults = await fetchBoardExamResults();
        
        // Filter articles to only include Agricultural and Biosystems Engineering related content
        const filteredResults = examResults.filter(article => {
          const searchText = (article.title + " " + article.description).toLowerCase();
          return searchText.includes("agricultural") || 
                 searchText.includes("biosystems engineer");
        });

        // Sort articles by date in descending order (latest first)
        const sortedResults = filteredResults.sort((a, b) => {
          const dateA = new Date(a.pubDate).getTime();
          const dateB = new Date(b.pubDate).getTime();
          return dateB - dateA;
        });

        setArticles(sortedResults);
        setTotalItems(sortedResults.length);
        setError(null);
      } catch (err) {
        console.error("Failed to load board exam results:", err);
        setError("Failed to load board exam results. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadBoardExams();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  
  // Get current articles
  const currentArticles = articles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">{error}</p>
        <p className="text-sm text-gray-600">
          This may be due to CORS restrictions. The app uses a free CORS proxy which may have request limits.
        </p>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-xl font-bold mb-6 text-secondary">Latest Agricultural & Biosystems Engineering Board Exam Results</h2>
      
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
          <p className="text-gray-500">No board exam results found. Please check back later.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentArticles.map((article) => (
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
          
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <Pagination>
                <PaginationContent>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        onClick={() => handlePageChange(i + 1)}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => handlePageChange(currentPage + 1)}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BoardExamFeed;
