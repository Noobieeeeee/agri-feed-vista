
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

// Google News RSS URL for Philippine agricultural engineering
const googleNewsUrl = 
  "https://news.google.com/rss/search?q=agricultural+engineering+Philippines";

// Fallback research feed since MDPI is failing
const scienceDirectUrl = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.sciencedirect.com%2Fpublication%2Fscience%2F03783774";

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
        description: cleanHtml(description),
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
    // Try the ScienceDirect feed as MDPI is returning Access Denied
    const response = await fetch(scienceDirectUrl);
    const data = await response.json();
    
    if (data.status !== "ok" || !data.items) {
      return [];
    }
    
    return data.items.map((item: any, index: number) => {
      return {
        id: `research-${index}`,
        title: item.title || "No title",
        link: item.link || "#",
        description: cleanHtml(item.description || "No description"),
        source: "ScienceDirect - Agricultural Engineering",
        pubDate: item.pubDate || "",
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
