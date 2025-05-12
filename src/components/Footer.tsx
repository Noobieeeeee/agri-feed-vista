
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="mt-16 py-8 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <Separator className="mb-6" />
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">
            AgriSys Feed &copy; {new Date().getFullYear()} - Philippine Agricultural & Biosystems Engineering News and Research
          </p>
          <p className="text-xs">
            Powered by Google News RSS, ScienceDirect, and AllOrigins CORS proxy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
