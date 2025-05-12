
interface Article {
  id: string;
  title: string;
  link: string;
  description: string;
  source: string;
  pubDate: string;
}

// Use AllOrigins as a CORS proxy
const corsProxy = "https://api.allorigins.win/raw?url=";

// Google News RSS URL for agricultural engineering
const googleNewsUrl = 
  "https://news.google.com/rss/search?q=agricultural+engineering";

// MDPI Agriculture Journal RSS feed
const mdpiAgricultureUrl = "https://www.mdpi.com/rss/journal/agriculture";

export const fetchNews = async (): Promise<Article[]> => {
  try {
    const response = await fetch(`${corsProxy}${encodeURIComponent(googleNewsUrl)}`);
    const data = await response.text();
    
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");
    const items = xmlDoc.querySelectorAll("item");
    
    return Array.from(items).map((item, index) => {
      const title = item.querySelector("title")?.textContent || "No title";
      const link = item.querySelector("link")?.textContent || "#";
      const description = item.querySelector("description")?.textContent || "No description";
      const sourceParts = title.split(" - ");
      const source = sourceParts.length > 1 ? sourceParts.pop() || "Unknown" : "Google News";
      const pubDate = item.querySelector("pubDate")?.textContent || "";
      
      return {
        id: `news-${index}`,
        title: sourceParts.join(" - "),
        link,
        description,
        source,
        pubDate,
      };
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const fetchResearch = async (): Promise<Article[]> => {
  try {
    const response = await fetch(`${corsProxy}${encodeURIComponent(mdpiAgricultureUrl)}`);
    const data = await response.text();
    
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");
    const items = xmlDoc.querySelectorAll("item");
    
    return Array.from(items).map((item, index) => {
      const title = item.querySelector("title")?.textContent || "No title";
      const link = item.querySelector("link")?.textContent || "#";
      const description = item.querySelector("description")?.textContent || "No description";
      const pubDate = item.querySelector("pubDate")?.textContent || "";
      
      return {
        id: `research-${index}`,
        title,
        link,
        description: cleanHtml(description),
        source: "MDPI Agriculture Journal",
        pubDate,
      };
    });
  } catch (error) {
    console.error("Error fetching research:", error);
    return [];
  }
};

// Helper function to clean HTML from descriptions
const cleanHtml = (html: string): string => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};
