
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { AgriEngineeringInfo } from "@/services/agriEngineeringInfo";
import { Separator } from "@/components/ui/separator";

interface InfoDialogProps {
  info: AgriEngineeringInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

const InfoDialog = ({ info, isOpen, onClose }: InfoDialogProps) => {
  if (!info) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-secondary">
            {info.title}
          </DialogTitle>
          <DialogDescription className="text-primary">
            {info.category}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="text-sm text-gray-700 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: info.content }} />
          
          {info.relatedLinks && info.relatedLinks.length > 0 && (
            <>
              <Separator className="my-4" />
              <div className="mt-4">
                <h4 className="font-medium text-sm mb-2">Related Resources:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {info.relatedLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm flex items-center gap-1"
                      >
                        {link.title}
                        <ExternalLink size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        <DialogFooter className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Source: {info.source}</span>
          <div className="flex gap-2">
            {info.sourceUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(info.sourceUrl, "_blank", "noopener,noreferrer")}
                className="flex items-center gap-1"
              >
                Visit Source
                <ExternalLink size={14} />
              </Button>
            )}
            <Button variant="default" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InfoDialog;
