
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, GraduationCap, Newspaper } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  return (
    <header className="w-full bg-white shadow-sm mb-8">
      <div className="container max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="h-8 w-8 rounded-full bg-primary mr-2"></div>
            <h1 className="text-2xl font-bold text-secondary">
              AgriSys <span className="text-primary">Feed</span>
            </h1>
          </div>
          <p className="text-gray-600 text-sm text-center md:text-right">
            Philippine Agricultural & Biosystems Engineering News and Research
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
            <TabsTrigger value="news" className="flex gap-2 items-center">
              <Newspaper size={16} />
              Philippine News
            </TabsTrigger>
            <TabsTrigger value="board" className="flex gap-2 items-center">
              <GraduationCap size={16} />
              Board Exam Results
            </TabsTrigger>
            <TabsTrigger value="research" className="flex gap-2 items-center">
              <Book size={16} />
              Research
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
};

export default Header;
