
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-16 py-8 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <Separator className="mb-6" />
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">
            AgriSys Feed &copy; {currentYear} - Philippine Agricultural & Biosystems Engineering News and Research
          </p>
          <p className="mb-1 text-xs">
            Featuring information about RA 3927, RA 8559, RA 10915, PSAE, Board Exam Results, and AMTEC
          </p>
          <p className="text-xs">
            Powered by Google News RSS, ScienceDirect, and AllOrigins CORS proxy | With pagination
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
