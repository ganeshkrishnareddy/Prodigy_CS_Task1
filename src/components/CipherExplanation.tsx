
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export function CipherExplanation() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mt-8">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="text-lg font-medium">How Caesar Cipher Works</h3>
        <Button variant="ghost" size="sm">
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>
      
      {isExpanded && (
        <div className="mt-4 text-gray-600 space-y-3 animate-fade-in">
          <p>
            The Caesar Cipher is one of the simplest and most widely known encryption techniques. 
            Named after Julius Caesar, it works by shifting each letter in the plaintext by a fixed number of positions down the alphabet.
          </p>
          
          <h4 className="font-medium text-black mt-3">Example:</h4>
          <p>
            With a shift of 3:
            <br />
            • A → D
            <br />
            • B → E
            <br />
            • C → F
            <br />
            And so on...
          </p>
          
          <p>
            The message "HELLO" would be encrypted as "KHOOR".
          </p>
          
          <h4 className="font-medium text-black mt-3">To decrypt:</h4>
          <p>
            Simply shift each letter in the opposite direction by the same amount.
            <br />
            With a shift of 3:
            <br />
            • D → A
            <br />
            • E → B
            <br />
            • F → C
          </p>
          
          <p>
            The encrypted message "KHOOR" would be decrypted back to "HELLO".
          </p>
          
          <p className="text-sm text-gray-500 italic mt-3">
            Note: This is a very basic encryption method and should not be used for sensitive information!
          </p>
        </div>
      )}
    </div>
  );
}
