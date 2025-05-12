
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { toast } from "sonner";

interface CipherResultProps {
  result: string;
  label: string;
}

export function CipherResult({ result, label }: CipherResultProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="mt-6 animate-slide-up">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">{label}</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 px-2 text-gray-500"
          onClick={copyToClipboard}
        >
          <Copy className="h-4 w-4 mr-1" />
          Copy
        </Button>
      </div>
      <div className="relative">
        <div className="p-4 border rounded-md bg-cipher-accent bg-opacity-30 min-h-[100px] whitespace-pre-wrap break-words">
          {result || <span className="text-gray-400 italic">Result will appear here...</span>}
        </div>
      </div>
    </div>
  );
}
